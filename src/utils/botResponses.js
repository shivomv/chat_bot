const responses = {
  hello: "Hi there! Nice to meet you!",
  hi: "Hello! How's it going?",
  how: "I'm doing great, thanks for asking!",
  help: "I'm here to help! What do you need?",
  thanks: "You're welcome! Happy to help.",
  bye: "Goodbye! Have a great day!",
  weather: "I don't have access to weather data, but you can check a weather app!",
  time: "I don't have real-time data, but you can check your system clock!",
  default: "That's interesting! Tell me more about that."
}

export function generateBotResponse(userInput) {
  const lowerInput = userInput.toLowerCase()
  
  for (const [key, value] of Object.entries(responses)) {
    if (key !== 'default' && lowerInput.includes(key)) {
      return value
    }
  }
  
  return responses.default
}
