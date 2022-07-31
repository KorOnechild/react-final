import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { CafeApplyList, CafeApprove } from "../../redux/modules/adminSlice";

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
                        <span className="cafeListName">{item?.cafename} </span>
                        <span className="cafeListDetail">
                            {item?.address}&nbsp;
                            {item?.addressdetail} <br />
                            {item?.zonenum}
                        </span>
                        <button
                        onClick={()=>{CafeApply(
                            item?.registerid, 
                            false
                            ); 
                
                            }}>⨉</button>
                        <button 
                        onClick={()=>{CafeApply(
                            item?.registerid, 
                            true
                            ); 
                
                            }}>⩗</button>
                    </div>
                    
                </div>
            ))}
        </>



    )
}




export default AllList;