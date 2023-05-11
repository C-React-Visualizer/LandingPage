import Image from 'next/image';

export default function DevTools() {
  if (typeof document !== 'undefined') {
    // browser code
    let option2Btn = document.getElementById('option2Btn');
    let option1Btn = document.getElementById('option1Btn');
    let option1 = document.getElementById('option1');
    let option2 = document.getElementById('option2');

    let option2BtnDesk = document.getElementById('option2BtnDesk');
    let option1BtnDesk = document.getElementById('option1BtnDesk');
    let option1Desk = document.getElementById('option1Desk');
    let option2Desk = document.getElementById('option2Desk');

    option2Btn.addEventListener('click', () => {
      option1.style.display = 'none';
      option2.style.display = 'block';
      option1Btn.style.backgroundColor = 'transparent';
      option2Btn.style.backgroundColor = 'white';
      option1Btn.style.color = 'gray';
      option2Btn.style.color = 'black';
    });
    option1Btn.addEventListener('click', () => {
      option2.style.display = 'none';
      option1.style.display = 'block';
      option2Btn.style.backgroundColor = 'transparent';
      option1Btn.style.backgroundColor = 'white';
      option2Btn.style.color = 'gray';
      option1Btn.style.color = 'black';
    });
    option2BtnDesk.addEventListener('click', () => {
      option1Desk.style.display = 'none';
      option2Desk.style.display = 'block';
      option1BtnDesk.style.backgroundColor = 'transparent';
      option2BtnDesk.style.backgroundColor = 'white';
      option1BtnDesk.style.color = 'gray';
      option2BtnDesk.style.color = 'black';
    });
    option1BtnDesk.addEventListener('click', () => {
      option2Desk.style.display = 'none';
      option1Desk.style.display = 'block';
      option2BtnDesk.style.backgroundColor = 'transparent';
      option1BtnDesk.style.backgroundColor = 'white';
      option2BtnDesk.style.color = 'gray';
      option1BtnDesk.style.color = 'black';
    });
  }

  return (
    <>
      <div className="desktop:flex justify-center gap-5 mt-10 pt-10">
        <div className="desktop:text-end py-10 desktop:pl-20 desktop:w-2/6 desktop:hidden">
          <p className="text-2xl pb-10">Chrome Devtool instructions</p>
          <div className="text-sm">
            <ul className="flex text-center pb-2 px-20">
              <li className="flex-1">
                <a
                  id="option1Btn"
                  className="relative block bg-white dark:bg-dark p-2 text-sm font-medium"
                >
                  Option 1
                </a>
              </li>

              <li className="flex-1">
                <a
                  id="option2Btn"
                  className="block p-2 text-sm font-medium text-gray-500"
                >
                  Option 2
                </a>
              </li>
            </ul>
            <div id="option1" className="pt-2">
              <p className="font-bold">Install from the Chrome Web Store</p>
              <ul className="text-sm leading-5 pt-2">
                <li>1. Open your React application, or any website</li>
                <li>
                  2. Open Chrome Developer Tools and click on the C-React Panel
                </li>
                <li>
                  3. Watch the tree update dynamically as you navigate through
                  your web page by clicking on components
                </li>
                <li>
                  4. Click on tree nodes to see corresponding element
                  highlighted on your web page
                </li>
              </ul>
            </div>
            <div id="option2" className="hidden pt-2">
              <p className="font-bold">Install C-React DevTool locally</p>
              <ul className="text-sm leading-6 pt-2">
                <li>
                  1. Go to Chrome Extensions for manual installation
                  (chrome://extensions/)
                </li>
                <li>2. Click on Load unpacked</li>
                <li>
                  3. Select react-visualizer/chrome-extension/build/ to load
                  this extension
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/ManualChromeDemo.gif"
            alt="function intro of custom renderer"
            width={600}
            height={400}
            className="shadow-md rounded-lg block mx-auto desktop:mx-0"
          />
        </div>
        <div className="text-start text-sm pl-10 desktop:w-2/6 hidden desktop:block">
          <p className="text-2xl pb-8">Chrome Devtool instructions</p>
          <div className="text-sm">
            <ul className="flex text-center pb-2">
              <li className="flex-1">
                <a
                  id="option1BtnDesk"
                  className="relative block bg-white dark:bg-dark p-2 text-sm font-medium"
                >
                  Option 1
                </a>
              </li>

              <li className="flex-1">
                <a
                  id="option2BtnDesk"
                  className="block p-2 text-sm font-medium text-gray-500"
                >
                  Option 2
                </a>
              </li>
            </ul>
            <div id="option1Desk" className="pt-2">
              <p className="font-bold">Install from the Chrome Web Store</p>
              <ul className="text-sm leading-5 pt-2">
                <li>1. Open your React application, or any website</li>
                <li>
                  2. Open Chrome Developer Tools and click on the C-React Panel
                </li>
                <li>
                  3. Watch the tree update dynamically as you navigate through
                  your web page by clicking on components
                </li>
                <li>
                  4. Click on tree nodes to see corresponding element
                  highlighted on your web page
                </li>
              </ul>
            </div>
            <div id="option2Desk" className="hidden pt-2">
              <p className="font-bold">Install C-React DevTool locally</p>
              <ul className="text-sm leading-6 pt-2">
                <li>
                  1. Go to Chrome Extensions for manual installation
                  (chrome://extensions/)
                </li>
                <li>2. Click on Load unpacked</li>
                <li>
                  3. Select react-visualizer/chrome-extension/build/ to load
                  this extension
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
