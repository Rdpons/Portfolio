import { BubbleChat } from 'flowise-embed-react';

const Chatbot = () => {
  return (
    <BubbleChat
            chatflowid: "6690bfb1-6f4b-49aa-b4d1-134e107de62b",
            apiHost: "https://ponsica-ponsica.hf.space",
            chatflowConfig: {},
            observersConfig: {},
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 20,
                    bottom: 20,
                    size: 48, // small | medium | large | number
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                    autoWindowOpen: {
                        autoOpen: true, //parameter to control automatic window opening
                        openDelay: 2, // Optional parameter for delay time in seconds
                        autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
                        },
                },
                chatWindow: {
                    showTitle: true,
                    title: 'Chat Bot',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    showAgentMessages: true,
                    welcomeMessage: 'Hello! This is custom welcome message',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    backgroundImage: 'enter image path or link', // If set, this will overlap the background color of the chat window.
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    //starterPrompts: ['What is a bot?', 'Who are you?'], // It overrides the starter prompts set by the chat flow passed
                    starterPromptFontSize: 15,
                    clearChatOnReload: false, // If set to true, the chat will be cleared when the page reloads.
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Created by',
                        company: 'Rhodney Dame N. Ponsica',
                        companyLink: 'https://ardii.vercel.app',
                    }
                }
            }}
        />    
    );
}

export default Chatbot;
