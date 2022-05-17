import React from 'react'
import $ from "jquery"
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md"
import HeroCard from './HeroCard.component'


const Slider = (props) => {
    let auto = false
    let slideHeight = "400"
    let slideWidth = "1250"
    let sliderWidth = "4100"

    if(auto===true) {
        setInterval( () => {
            moveRight()
        }, 3000);

    }
    
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function() {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };
    
    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    
  return (
    <>
        <div id="slider" on className=" mx-auto relative overflow-hidden" style={{width: `${slideWidth}px`, height: `${slideHeight}px` }}>
            <a  style={{marginTop: `${slideHeight/2-20}px`}} onClick={moveRight} className="absolute z-30  block mr-3 p-2 w-auto h-auto bg-none text-2xl font-thin   cursor-pointer hover:opacity-70 right-0  text-gray-200 hover:text-white hover:bg-gray-400 rounded-3xl hover:rounded-3xl"><MdOutlineArrowForwardIos className='' /></a>
            <a  style={{marginTop: `${slideHeight/2-20}px`}} onClick={moveLeft} className="absolute z-10  block ml-3 p-2 w-auto h-auto bg-none text-2xl font-thin  cursor-pointer hover:opacity-70 text-gray-200 hover:text-white hover:bg-gray-400 rounded-3xl hover:rounded-3xl"><MdArrowBackIosNew /></a>
            <ul className='relative h-56 list-none' style={{width: `${sliderWidth}px`, height: `${slideHeight}px` }}>
                {
                    props.movies.map((movie) => (
                        <li style={{width: `${slideWidth}px`, height: `${slideHeight}px` }}className='relative block float-left m-0 p-0 w-48 h-48 '>
                            <HeroCard movie={movie}/>
                        </li>
                    ))
                }
                
            </ul>
        </div>
        
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </>
  )
}

export default Slider