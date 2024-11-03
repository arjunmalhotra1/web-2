// Adding the 2 comments
// sm, md, lg, xl, 2xl
// hidden md:block - This means default is hidden but beyond "md:block" it is visible.
//  md:w-96 w-8 - This means - width is 8 by default and when we go abobve md then it is 96

export function SidebarClass1() {
    return <div className="flex">
        <div className="transition-all duration-1000 md:block md:w-96 w-8 h-screen ">
            Sidebar
        </div>
        <div className="bg-green-800 w-full h-screen">
            Content
        </div>
    </div>
}