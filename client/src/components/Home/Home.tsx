
import {User} from '../../types/UserTypes'

import { HeaderContainer as Header } from '../../container/HeaderContainer'

import { ChatsListContainer as ChatsList } from '../../container/ChatsListContainer'

import { Chat } from './Chat'

type Props = {
    user: User,
    logOut: () => void,
    chat: string,
    selectChat: (chatInfo: string) => void
}


const Home: React.FC<Props> = ({user, logOut, chat, selectChat}) => {

    return (
        <div className='home'>
            <div className='home--left-side'>
                <Header user={user} logOut={logOut} selectChat={selectChat}/>
                <ChatsList userID={user._id} selectChat={selectChat} />
            </div>
            <div>
                {chat}
            </div>

        </div>
    )
}

export default Home