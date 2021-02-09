import React from 'react'
import "./blog-drop.css";
import CreateIcon from '@material-ui/icons/Create';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import FilterListIcon from '@material-ui/icons/FilterList';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import DescriptionIcon from '@material-ui/icons/Description';
function BlogDrop() {
    return (
        <div className="blogDrop animate__animated  animate__slideInLeft" >
            <h3>Blog Types</h3>
            <a href="/Boxed Layout" ><CreateIcon/> Boxed Layout</a>
            <a href="/Posts Carousel" ><ArrowRightAltIcon/> Posts Carousel</a>
            <a href="/ News Filtered" ><FilterListIcon/> News Filtered</a>
            <a href="/Blog Minimal" ><CalendarTodayIcon/>Blog Minimal</a>
            <a href="/Simple Layout" ><FilterNoneIcon/>Simple Layout</a>
            <a href="/Article Details" ><DescriptionIcon/>Article Details</a>
           
        </div>
    )
}

export default BlogDrop
