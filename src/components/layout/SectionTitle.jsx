
function SectionTitle({ title, subtitle }) {
    return (
        <div className="title-main text-center">
            <h1 className="title text-2xl md:text-3xl font-bold text-[var(--text-dark)]">{title}</h1>
            <div className="title-divider text-[var(--text-secondary)] text-[6px] flex flex-row gap-4 justify-center py-6">
                <i className="bi bi-suit-diamond-fill"></i>
                <i className="bi bi-suit-diamond-fill"></i>
                <i className="bi bi-suit-diamond-fill"></i>
            </div>
            {subtitle && (
                <h6 className="subtitle text-sm text-[var(--text-light-2)]">{subtitle}</h6>
            )}
        </div>
    )
}

export default SectionTitle