import { Chat } from '../../types/ChatTypes'

type Props = {
    chat: Chat,
    select: (chatInfo: string) => void
}

export const ChatsListItem: React.FC<Props> = ({ chat, select }) => {

    const handleClick = (chatID: string) => {
        select(chatID)
    }


    return (
        <>
            <div className='contact' onClick={() => handleClick(chat._id)}>
                <div className='contact--profile-pic' style={{backgroundImage: `url(${chat.chatPic})`}}>
                </div>
                
                <div>
                    <p>{chat.name}</p>
                </div>
            </div>
        </>
    )
}