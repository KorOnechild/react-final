import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CafeApplyList, CafeApprove } from "../../redux/modules/adminSlice";
import { MdCancel,MdCheckCircleOutline } from "react-icons/md";
import { GiCancel } from "react-icons/gi";


const AllList = () => {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(CafeApplyList())
    }, [dispatch]);

    const list = useSelector((state) => state.adminSlice.CafeInfo);
    // console.log(list.data.registerList)
    const CafeApply = (regid, permit ) =>{
        // console.log(id,regid, permit)
        dispatch(CafeApprove({
            regid : regid,
            permit : permit
        }))
    }


    return (
      
        <>
            {list?.map((item, i) => (
                <div className="Cards"
                    key={i}>
                    <div className="cafeCards">
                        <span className="cafeListName">{item?.cafename} </span><br/>
                        <span className="cafeListDetail">
                            {item?.address}&nbsp;
                            {item?.addressdetail} <br />
                            {item?.zonenum}
                        </span><br/>
                        <MdCheckCircleOutline
                        onClick={()=>{CafeApply(
                            item?.registerid, 
                            true
                            ); 
                
                            }}
                            className="registerButton">MdCheckCircleOutline</MdCheckCircleOutline>
                        <MdCancel
                        onClick={()=>{CafeApply(
                            item?.registerid, 
                            false
                            ); 
                
                            }}
                            className="cancelButton">MdCancel</MdCancel>
                        
                    </div>
                    
                </div>
            ))}
        </>



    )
}




export default AllList;