import { FC, ReactNode, useEffect, useState } from 'react';
import './MultiSelect.scss';
import Multiselect from 'multiselect-react-dropdown';
import cancelIcon from '../../assets/icons/cancel.svg'
import { fetchGenres } from '../../api/fetchGenres';

interface IMultiSelect {
    title: string;
    options: string[];
}

export const MultiSelect: FC<IMultiSelect> = ({title, options}) => {

    // const[options, setOptions] = useState([]);
    const[selectedOptions, setSelectedOptions] = useState([]);
    const[style, setStyle] = useState({searchBox: 
        {
            'border': 'none',
            'font-size': '10px',
            'height': '56px',
            'background': '#323537',
            'padding': '13px 16px',
            'border-radius': '10px',
            'margin-bottom':'8px'
        },
        inputField: { 
            'font-size': '16px',
            'font-family': "'Exo 2', sans-serif",
            'line-height': '24px',
            'font-weight': '500',
            'color': '#fff'
        },
        optionContainer: {
            'border': 'none',
            'background': '#323537'
          },
        option: { 
            'padding': '17px 0 15px 20px',
            'border-bottom': '1px solid #242426'
          },
          multiselectContainer: { 
            },
        chips:{ 
                'background': '#242426',
                'border-radius': '6px',
                'font-weight': '500',
                'font-size': '16px',
                'line-height': '24px'
            }
    })

    const handleStyleChange = (newStyle: any) => {
        setStyle({searchBox: 
            {
                'border': '2px solid #7B61FF',
                'font-size': '10px',
                'height': '56px',
                'background': '#323537',
                'padding': '13px 16px',
                'border-radius': '10px',
                'margin-bottom':'8px'
            },
            inputField: { 
                'font-size': '16px',
                'font-family': "'Exo 2', sans-serif",
                'line-height': '24px',
                'font-weight': '500',
                'color': '#fff'
            },
            optionContainer: {
                'border': 'none',
                'background': '#323537'
              },
            option: { 
                'padding': '17px 0 15px 20px',
                'border-bottom': '1px solid #242426'
              },
            multiselectContainer: { 
                },
            chips:{ 
                'background': '#242426',
                'border-radius': '6px',
                'font-weight': '500',
                'font-size': '16px',
                'line-height': '24px'
                }
        });
    }

    // useEffect(() => {
    //     fetchGenres().then((data) => {
    //         setOptions(data)
    //         console.log(data)
    //     }
    // )}, [])


    return (
            <div className='multi-select'>
            <h4 className='multi-select-title'>{title}</h4>
            <Multiselect
                isObject={false}
                options={options}
                style={style}
                selectedValues={selectedOptions}
            />  
        </div>
    )
};
