export default function  Pagination({title, subtitle}){
    return(
        <section className="text-white p-[2.6rem] w-full">
            <h2 className="text-headingPrimary "><span className="text-primary" >/</span>{title}</h2>
            <p className="text-gray">{subtitle}</p>
        </section>
    )
}