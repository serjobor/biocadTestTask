//Массив изначальных устройств и их компонентаов
const arrDevice = [
    {
    'device_img'        : 'pH.png',
    'device_name'       : 'pH-метр Mettler-Toledo International, Inc. SevenCompact S220',
    'device_status'     : 'Свободен',
    'device_bellStatus'  : 'on', 
    },

    {
        'device_img'      : 'Спектр.png',
        'device_name'     : 'Спектрофотометр Varian, Inc Cary 50 Bio',
        'device_status'   : 'Свободен',
        'device_bellStatus': 'on', 
    },

    {
        'device_img'      : 'Титратор.png',
        'device_name'     : 'Титратор',
        'device_status'   : 'Свободен',
        'device_bellStatus': 'unState', 
    },

    {
    'device_img'      : 'Коагулометр.png',
    'device_name'     : 'Коагулометр Tcoag, KC 4 Delta',
    'device_status'   : 'Свободен',
    'device_bellStatus': 'off', 
    },

    {
    'device_img'      : 'Коагулометр.png',
    'device_name'     : 'Коагулометр Tcoag, KC 4 Delta',
    'device_status'   : 'Свободен',
    'device_bellStatus': 'off', 
    }
];

//Массив со статусами уведомлений вкл/выкл/не устав.
const arrNotice = [
    {
    'on':   `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5_2077)">
                    <path d="M8.08 4.08L6.65 2.65C4.25 4.48 2.67 7.3 2.53 10.5H4.53C4.68 7.85 6.04 5.53 8.08 4.08ZM20.47 10.5H22.47C22.32 7.3 20.74 4.48 18.35 2.65L16.93 4.08C18.95 5.53 20.32 7.85 20.47 10.5ZM18.5 11C18.5 7.93 16.86 5.36 14 4.68V4C14 3.17 13.33 2.5 12.5 2.5C11.67 2.5 11 3.17 11 4V4.68C8.13 5.36 6.5 7.92 6.5 11V16L4.5 18V19H20.5V18L18.5 16V11ZM12.5 22C12.64 22 12.77 21.99 12.9 21.96C13.55 21.82 14.08 21.38 14.34 20.78C14.44 20.54 14.49 20.28 14.49 20H10.49C10.5 21.1 11.39 22 12.5 22Z" fill="black" fill-opacity="0.6" />
                </g>
                <defs>
                    <clipPath id="clip0_5_2077">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>`,

    'off':   `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5_2284)">
                    <path d="M20.5 18.69L8.34 6.14L5.77 3.49L4.5 4.76L7.3 7.56V7.57C6.78 8.56 6.5 9.73 6.5 10.99V15.99L4.5 17.99V18.99H18.23L20.23 20.99L21.5 19.72L20.5 18.69ZM12.5 22C13.61 22 14.5 21.11 14.5 20H10.5C10.5 21.11 11.39 22 12.5 22ZM18.5 14.68V11C18.5 7.92 16.86 5.36 14 4.68V4C14 3.17 13.33 2.5 12.5 2.5C11.67 2.5 11 3.17 11 4V4.68C10.85 4.71 10.71 4.76 10.58 4.8C10.48 4.83 10.38 4.87 10.28 4.91H10.27C10.26 4.91 10.26 4.91 10.25 4.92C10.02 5.01 9.79 5.12 9.57 5.23C9.57 5.23 9.56 5.23 9.56 5.24L18.5 14.68Z" fill="black" fill-opacity="0.6" />
                </g>
                <defs>
                    <clipPath id="clip0_5_2284">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                    </clipPath>
                </defs>
            </svg>`,
    'unState' : `<svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 20C9.6 20 10.5 19.1 10.5 18H6.5C6.5 19.1 7.4 20 8.5 20ZM14.5 14V9C14.5 5.93 12.87 3.36 10 2.68V2C10 1.17 9.33 0.5 8.5 0.5C7.67 0.5 7 1.17 7 2V2.68C4.14 3.36 2.5 5.92 2.5 9V14L0.5 16V17H16.5V16L14.5 14ZM12.5 15H4.5V9C4.5 6.52 6.01 4.5 8.5 4.5C10.99 4.5 12.5 6.52 12.5 9V15Z" fill="black" fill-opacity="0.6" />
                </svg>`
    }
];

//Создает строку с данными девайса
function createDivaceItem() {
    let deviseItem = '';

    for (let i = 0; i < arrDevice.length; i++) {
        deviseItem += `
        <li class="dev-list-item" id="deviceImgId">
            <img src="./img/${arrDevice[i].device_img}" alt="${arrDevice[i].device_img} do not load" class="dev-list-item-img">
            <div class="dev-list-item-name" id="deviceNameId">
                ${arrDevice[i].device_name}
            </div>

            <div class="dev-list-item-cardstate" id="">
                <div class="dev-li-item-cardstate-sel" id="deviceStatusId">
                    ${arrDevice[i].device_status}
                </div>

                <button class="dev-li-item-cardstate-op">
                    <svg width="7" height="4" viewBox="0 0 7 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166656 0.666626L3.49999 3.99996L6.83332 0.666626H0.166656Z" fill="black" fill-opacity="0.6" />
                    </svg>
                </button>
            </div>

            <button class="dev-list-item-noti" id="deviceBellStatusId-${i}" value="${arrDevice[i].device_bellStatus}">
            
            </button>
        </li>
        `
    }
    return deviseItem;
}

//В зависимости от статуса значка уведомлений устанавливает svg-картинку
function createBellStatus() {
    for (let i = 0; i < arrDevice.length; i++) {
        const deviceBellStatus = document.getElementById(`deviceBellStatusId-${i}`).value;
        const setDevBellStatus = document.getElementById(`deviceBellStatusId-${i}`);
        
        (deviceBellStatus === 'on') ? setDevBellStatus.innerHTML = `${arrNotice[0].on}` :
            (deviceBellStatus === 'off') ? setDevBellStatus.innerHTML = `${arrNotice[0].off}`: 
                (deviceBellStatus === 'unState') ? setDevBellStatus.innerHTML = `${arrNotice[0].unState}` : 
                console.log('Error Devise do not have STATUS Bell');
    }
}

//Обновляет статусс значка уведомление при клике на него
function ClicOnBall(bellStatusId) {
    let deviceBellStatus = document.getElementById(bellStatusId).value;

    if(deviceBellStatus === 'on'){
        document.getElementById(bellStatusId).value = 'off';
        createBellStatus();
    }

    if(deviceBellStatus === 'off'){
        document.getElementById(bellStatusId).value = 'unState';
        createBellStatus();
    }

    if(deviceBellStatus === 'unState'){
        document.getElementById(bellStatusId).value = 'on';
        createBellStatus();
    }
}

const devListArea = document.getElementById('devListId');
devListArea.innerHTML = '';

//Реализованная логика работы страницы main после ее полной загрузки 
document.addEventListener("DOMContentLoaded", function(){
    const devListId = document.getElementById('devListId');
    devListId.innerHTML = createDivaceItem();
    
    createBellStatus();

    document.getElementById('deviceBellStatusId-0').addEventListener('click', event => {
        ClicOnBall('deviceBellStatusId-0');
    });

    document.getElementById('deviceBellStatusId-1').addEventListener('click', event => {
        ClicOnBall('deviceBellStatusId-1');
    });

    document.getElementById('deviceBellStatusId-2').addEventListener('click', event => {
        ClicOnBall('deviceBellStatusId-2');
    });

    document.getElementById('deviceBellStatusId-3').addEventListener('click', event => {
        ClicOnBall('deviceBellStatusId-3');
    });

    document.getElementById('deviceBellStatusId-4').addEventListener('click', event => {
        ClicOnBall('deviceBellStatusId-4');
    });
});



