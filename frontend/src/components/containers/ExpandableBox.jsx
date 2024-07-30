import { useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";

export default function ExpandableBox({name, children}) {
    const [expanded, setExpanded] = useState(false)
    const contentRef = useRef(null);

    const onExpand = () => {
        setExpanded(!expanded)
    }

    return (
        <section className={`p-3 mb-3 mx-auto w-content skewed-btn ${expanded ? 'expanded' : ''}`} onClick={onExpand}>
            <button className="d-flex flex-column border-0 w-100 clear-btn">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <h2 className='font-1'>{`${name}?`}</h2>
                    <IoIosArrowDown size={40} className={`dropdown-arrow ${expanded ? 'flipped' : ''}`}/>
                </div>
                
                <div
                ref={contentRef}
                className="accordion-item"
                style={{ maxHeight: expanded ? `${contentRef.current.scrollHeight}px` : '0', overflow: 'hidden'}}>
                    {children}
                </div>
            </button>
        </section>
    )
}