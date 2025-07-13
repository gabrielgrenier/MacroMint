type FooterMenProps = {
    selectedTab: string;
    onTabChange: (tab: string) => void;
};

// TODO: Macros is not a great page name for what it will be, we should rename it later
function FooterMenu({selectedTab, onTabChange}: FooterMenProps) {

    const selectedClass = (tabName: string) => 
        tabName === selectedTab ?
            "text-green-500 font-semibold" : "text-gray-500"; 

    return <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-2 border-gray-300">
        <div className="grid grid-cols-4 text-center">
            <div className={selectedClass('macros')} onClick={() => onTabChange('macros')}>
                <div className="text-2xl leading-none transition duration-300">
                    <div className="material-symbols-outlined">
                        scale
                    </div>
                </div>
                <p className="-mt-1">Macros</p>
            </div>

            <div className={selectedClass('meals')} onClick={() => onTabChange('meals')}>
                <div className="text-2xl leading-none transition duration-300">
                    <div className="material-symbols-outlined">
                        cookie
                    </div>
                </div>
                <p className="-mt-1">Meals</p>
            </div>

            <div className={selectedClass('me')} onClick={() => onTabChange('me')}>
                <div className="text-2xl leading-none transition duration-300">
                    <div className="material-symbols-outlined">
                        account_circle
                    </div>
                </div>
                <p className="-mt-1">Me</p>
            </div>

            <div className={selectedClass('workout')} onClick={() => onTabChange('workout')}>
                <div className="text-2xl leading-none transition duration-300">
                    <div className="material-symbols-outlined">
                        fitness_center
                    </div>
                </div>
                <p className="-mt-1">Workout</p>
            </div>
        </div>
    </div>
}

export default FooterMenu;