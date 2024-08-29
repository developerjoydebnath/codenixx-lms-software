export default function PageSection({ children, title = "", sub_title = "", icon, sectionClass = "", className = "" }) {
    return (
        <section className={sectionClass}>
            <div>
                <div className="flex justify-center">{icon}</div>
                <h2 className="mt-4 text-center text-4xl font-medium text-base-500">{title}</h2>
                <h4 className="mt-2 text-center text-lg text-base-300">{sub_title}</h4>
            </div>
            <div className="mt-16">{children}</div>
        </section>
    );
}
