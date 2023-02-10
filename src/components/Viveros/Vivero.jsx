import React from 'react';
import Estrellas from './Estrellas';
import './Vivero.css';
import data from './viverosdata.json';

function Vivero() {
   return (
     <>
     { data.map(int => {
    return( <div className="vivero card mb-3">
         <div className="row g-0">
             <div className="col-md-4">
             <img src={(`${int.link}`)} className="img-fluid rounded-start" alt={(`${int.nvmbre}`)} />
             </div>
             <div className="col-md-8">
                 <div className="card-body">
                 <p className="card-text">{int.description}</p>
                 <Estrellas />
                 </div>
             </div>
         </div>
     </div>)
   })
 }
 </>
 )

  // return(
  //   <div className="vivero card mb-3">
  //        <div className="row g-0">
  //            <div className="col-md-4">
  //            <img src="https://fastly.4sqi.net/img/general/600x600/1552413_G5_jx9ndwcG30nVHV0CMR_bLVm774vkxFFJTtc0jtIY.jpg" className="img-fluid rounded-start" alt="Viveros Shangai" />
  //            </div>
  //             <div className="col-md-8">
  //                <div className="card-body">
  //                <p className="card-text">En Viveros Shangai sabemos lo importante que es mantener un hogar lleno de vida, por eso ponemos a tu alcance un amplio catálogo de flores y plantas para tu hogar.</p>
  //                <Estrellas />
  //                </div>
  //            </div>
  //        </div>
  //    </div>
  // )
};

export default Vivero
