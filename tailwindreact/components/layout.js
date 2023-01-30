

export default function Layout() {
    return (
      <>
        <div id="container" class="flex flex-row justify-around align-baseline mx-auto p-6 m-0 bg-black ring-1 ring-slate-900/5 text-white w-full">
            <div class="">
              <svg class="w-5 h-5 inline-block transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-200 -m-12" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M6 17.6l-2 -1.1v-2.5"></path>
        <path d="M4 10v-2.5l2 -1.1"></path>
        <path d="M10 4.1l2 -1.1l2 1.1"></path>
        <path d="M18 6.4l2 1.1v2.5"></path>
        <path d="M20 14v2.5l-2 1.12"></path>
        <path d="M14 19.9l-2 1.1l-2 -1.1"></path>
        <line x1="12" y1="12" x2="14" y2="10.9"></line>
        <line x1="18" y1="8.6" x2="20" y2="7.5"></line>
        <line x1="12" y1="12" x2="12" y2="14.5"></line>
        <line x1="12" y1="18.5" x2="12" y2="21"></line>
        <path d="M12 12l-2 -1.12"></path>
        <line x1="6" y1="8.6" x2="4" y2="7.5"></line>
              </svg>
            </div>
            <li class="transition ease-in-out delay-150 duration-200 inline-block pl-0 pr-0 border-solid border-b-2 border-slate-900 select-none hover:border-slate-700">Page 1</li>
            <li class="transition ease-in-out delay-150  duration-200 inline-block pl-0 pr-0 border-solid border-b-2 border-slate-900 select-none hover:border-slate-700">Page 2</li>
            <li class="transition ease-in-out delay-150  duration-200 inline-block pl-0 pr-0 border-solid border-b-2 border-slate-900 select-none hover:border-slate-700">Page 3</li>
        </div>

      </>
    )
}

{/* <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 m-7 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 hover:shadow-xl active:backdrop:bg-red-500">
  <div class="flex items-center space-x-3">
  <div id="svgContainer" className='group-hover:invert'>
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-app-window" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
    <path d="M6 8h.01"></path>
    <path d="M9 8h.01"></path>
    </svg>
  </div>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3> <br />
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a> */}