
function SectionTitle({ title, subtitle, theme }) {
    return (
        <div className="title-main text-center">
            <h1
                className={`title text-2xl md:text-3xl font-bold
                 ${theme === 'dark' ? 'text-(--text-light)' : 'text-(--text-dark)'}`}
            >{title}</h1>
            <div className="title-divider text-(--text-secondary) text-[6px] flex flex-row gap-4 justify-center py-6">
                <i className="bi bi-suit-diamond-fill"></i>
                <i className="bi bi-suit-diamond-fill"></i>
                <i className="bi bi-suit-diamond-fill"></i>
            </div>
            {subtitle && (
                <h6 className={`subtitle text-sm ${theme === "dark" ? 'text-(--text-light)/60' : 'text-(--text-light-2)'}`}>{subtitle}</h6>
            )}
        </div>
    )
}

export default SectionTitle