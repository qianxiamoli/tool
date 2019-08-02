import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import {message,Button} from 'antd';
import inject_unmount from './injectUnmount';
import $ from 'jquery';

@inject_unmount
class ButtonBases extends React.Component{

   constructor(props){
        super(props);
        this.state={
           images :[
                   {
                     url: 'https://b3-q.mafengwo.net/s14/M00/5E/3F/wKgE2l0V5AiAVkwwAAZVr48WgsU116.JPG',
                     title: '栖霞山路线',
                     width: '33.3333%',
                   },
                   {
                     url: 'https://b2-q.mafengwo.net/s14/M00/56/EE/wKgE2l0V4WmANrLDAATtyaMcsUU91.jpeg',
                     title: '钟山陵路线',
                     width: '33.3333%',
                   },
                   {
                     url: 'https://n3-q.mafengwo.net/s14/M00/4B/A0/wKgE2l0UQ4OAalbtAAiCgG-rNKI832.jpg',
                     title: '灵谷寺路线',
                     width: '33.3333%',
                    },
                    {
                     url: 'https://n3-q.mafengwo.net/s14/M00/4B/A0/wKgE2l0UQ4OAalbtAAiCgG-rNKI832.jpg',
                     title: '+创建新的行程',
                     width: '33.3333%',
                    },
                    ],
        }
   }

   componentDidMount() {

   }

   clickRouteName=(e,routeName)=>{
       this.props.toParentClickRouteName(routeName);
   }

   render() {
       const {images}=this.state;

       return (
           <div className="buttonContainer">
              <link rel="stylesheet" href="css/buttonBases.css"/>
                  {images.map((image,index) => (
                   <ButtonBase onClick={(e)=>this.clickRouteName(e,image.title)}
                     focusRipple
                     key={image.title}
                     className="image"
                     style={{width: image.width,}}>
                       <span  className="imageSrc" style={{backgroundImage: `url(${image.url})`,}}/>
                       <span className="imageBackdrop" />
                       <span className="imageButton">
                          <Typography component="span" variant="subtitle1" color="inherit" className="imageTitle">
                             {image.title}
                             <span className="imageMarked" />
                          </Typography>
                       </span>
                   </ButtonBase>
                   ))}
           </div>
       )
   }
}
export default ButtonBases;