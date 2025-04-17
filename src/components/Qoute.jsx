import commas from '../assets/commas.svg'


export default function Qoute(){
    return(
        <div className="w-full flex justify-center items-center text-body text-gray ">
            <div className="p-[3.2rem] relative outline outline-2 outline-gray outline-offset-[-1px] justify-start items-center font-semibold mb-[7.4rem] ">
                <h2 className=''>with great powers comes great electricity bill</h2>
                <img  className='absolute top-[-1.4rem] left-[1.1rem]' src={commas} />
                <img className='absolute rotate-180 bottom-[-1.4rem] right-[1.1rem] '  src={commas} />

                <h2 className='absolute outline outline-2 outline-gray outline-offset-[-1px] justify-start items-center font-semibold bottom-[-5.7rem] right-0 p-[1.6rem] '>- Dr. Who</h2>
            </div>
        </div>
    )
}