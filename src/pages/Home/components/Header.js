import React from 'react';

function Header() {
    return(
        <header className='header'>
                <div className='toolbar'>
                    <div className=''>
                <a href='/'>Betel Brasileiro</a>
                    </div>
                    <div className=''>
                <button>Novo Post</button>       
                <span>img 1</span>
                <span>img 2</span>
                    </div>
                </div>
         
            </header>
    )
}

export default Header;