import React from 'react'

function Card(props) {
    // 

{/* <Card cloth ='Sweeter' button_1 = "Sellnow" button_2 = "Hello" button_3 = "Nope" /> */}
  return (
    <div> <div class="flex font-sans  bg-white">
    <div class="flex-none w-48 relative">
      <img src = {`/images/${props.cloth}.jpg`} alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-lg font-semibold text-slate-900">
          {props.cloth}
        </h1>
        <div class="text-lg font-semibold text-slate-500">
          $110.00
        </div>
        <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
          In stock
        </div>
      </div>
      <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
        <div class="space-x-2 flex text-sm">
          <label>
            <input class="sr-only peer" name="size" type="radio" value="xs" checked />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XS
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="s" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              S
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="m" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              M
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="l" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              L
            </div>
          </label>
          <label>
            <input class="sr-only peer" name="size" type="radio" value="xl" />
            <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
              XL
            </div>
          </label>
        </div>
      </div>
      <div class="flex space-x-4 mb-6 text-sm font-medium">
        <div class="flex-auto flex space-x-4">
          <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
            {props.button_1}
          </button>
          <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-300" type="button">
            {props.button_2}
          </button>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-white border border-slate-200" type="button" aria-label="Like">{props.button_3}
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p class="text-sm text-slate-700">
        Free shipping on all continental US orders.
      </p>
    </form>
  </div></div>
  )
}

export default Card