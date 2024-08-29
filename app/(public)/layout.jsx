export default function PublicLayout({ children }) {
    return (
        <div>
            <div className="relative h-screen w-full overflow-hidden bg-body">
                <div className="absolute bottom-0 left-0 right-0 top-0 z-0 bg-[linear-gradient(to_right,#ebebec_1px,transparent_1px),linear-gradient(to_bottom,#ebebec_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#1f2024_1px,transparent_1px),linear-gradient(to_bottom,#1f2024_1px,transparent_1px)]"></div>
                <div className="absolute right-40 top-20 h-[200px] w-[400px] rotate-45 rounded-3xl bg-gradient-to-r from-blue-500 to-blue-700 opacity-15 blur-3xl"></div>
                <div className="absolute right-[30%] top-96 h-[400px] w-[400px] rotate-45 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-10 blur-3xl"></div>
                <div className="absolute left-20 top-96 h-[600px] w-[300px] rotate-45 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-10 blur-3xl"></div>
                <div className="absolute left-80 h-[300px] w-[500px] rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-10 blur-3xl"></div>
                <div className="absolute left-0 top-0 z-10 h-full w-full bg-transparent">{children}</div>
            </div>
        </div>
    );
}
