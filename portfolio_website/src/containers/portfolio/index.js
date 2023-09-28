import React from 'react';
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from '../../images/s1.jpeg';
import ImageTwo from '../../images/s2.jpg';
import ImageThree from '../../images/sec.jpg';
import { useState } from 'react';
import './styles.scss';

const portfolioData =[
    {
        id: 2,
        name: 'Front End Engineering',
        image: ImageOne,
    },

    {
        id: 3,
        name: 'Back End Engineering',
        image: ImageTwo,
    },

    {
        id: 4,
        name: 'Cyber Security',
        image: ImageThree,
    }

]

const filterData = [
    {
        filterId: 1,
        label: 'All',
        links: '',
    },

    {
        filterId: 2,
        label: 'FrontEnd',
        links: '',
    },

    {
        filterId: 3,
        label: 'BackEnd',
        links: '',
    },

    {
        filterId: 4,
        label: 'Security',
        links: '',
    }
]

const Portfolio = () => {
    const [filteredvalue, setFilteredValue] = useState(1)
    const [hoveredValue, setHoveredValue] = useState(null)

    function handleFilter(currentId){
        setFilteredValue(currentId)
    };

    function handleHover(index){
        setHoveredValue(index);
    }

    console.log('===========');
    console.log(hoveredValue);
    console.log('==========');

    const filteredItems = filteredvalue=== 1 ? portfolioData:
    portfolioData.filter(item=> item.id ===filteredvalue);

    console.log(filteredItems);
    
    return (
        <section id="portfolio" className='portfolio'>

            <PageHeaderContent
                headerText="My Portfolio"
                icon={< BsInfoCircleFill size={40} />}
            />

            <div className='portfolio__content'>
                <ul className='portfolio__content__filter'>
                    {
                        filterData.map(item=>(
                            <li className={item.filterId === filteredvalue ? 'active' : '' } 
                            onClick={()=>handleFilter(item.filterId)} key={item.filterId}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className='portfolio__content__cards'>
                    {
                        filteredItems.map((item, index)=>(
                            <div className='portfolio__content__cards__item'
                             key={`cardItem${item.name.trim()}`}
                             onMouseEnter={()=>handleHover(index)}
                             onMouseLeave={()=>handleHover(null)}>
                                <div className='portfolio__content__cards__item__img-wrapper'>
                                    <a href='/#'>
                                        <img alt='TEST' src={item.image} />
                                    </a>

                                </div>
                                <div className='overlay'>
                                    {
                                        index === hoveredValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button>View</button>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    );
}

export default Portfolio;