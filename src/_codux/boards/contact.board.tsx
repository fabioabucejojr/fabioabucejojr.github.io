import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Contact',
    Board: () => 
    <div>
        <div className="container mt-3 contactContent">
            <h1 className="text-center">Contact Me</h1>
        </div>
        <div className="row mt-4">
            <div className="col-lg-6">
                <!-- to edit google map goto https://www.embed-map.com type your location, generate html code and copy the html  -->
                <div style="overflow:hidden;resize:none;max-width:100%;width:1000px;height:500px;"><div id="embed-ded-map-canvas" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Cebu+City,+Cebu,+Philippines&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a className="our-googlemap-code" href="https://www.bootstrapskins.com/themes" id="grab-map-data">premium bootstrap themes</a><style>#embed-ded-map-canvas img{max-height:none;max-width:none!important;background:none!important;}</style></div>

            </div>

            <div className="col-lg-6">
                <!-- form fields -->
                <form>
                    <input type="text" className="form-control form-control-lg" placeholder="Name">
                    <input type="email" className="form-control mt-3" placeholder="Email">
                    <input type="text" className="form-control mt-3" placeholder="Subject">
                    <div className="mb-3 mt-3">
                        <textarea className="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                    </div>
                </form>
                
                <button type="button" className="btn btn-success mt-3">Contact Me</button>
                
            </div>            
        </div>
    </div>
});
