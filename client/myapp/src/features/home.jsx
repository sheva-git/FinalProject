
import React, { useState, useEffect } from 'react';
import { PhotoService } from './service/ProductService';
import image from './building.jpg'
import HomeImg from '../pics/backbuilding.jpg'
import { Image } from 'primereact/image';
export default function ResponsiveDoc() {
    const [images, setImages] = useState(null);

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    useEffect(() => {
        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
    }

    return (
        <div  >               

            <div className="card flex justify-content-center">
                <Image src={HomeImg} alt="Image" width="1000" height='700' preview />

            </div>
          
        </div>
    )
}
