// Adding the 2 comments
// sm, md, lg, xl, 2xl
// hidden md:block - This means default is hidden but beyond "md:block" it is visible.

export function SidebarClass1() {
    return <div className="flex">
        <div className="hidden md:block w-96 h-screen">
            Sidebar
        </div>
        <div className="bg-green-800 w-full">
            Content
        </div>
    </div>
}