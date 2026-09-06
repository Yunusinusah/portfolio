import { useState } from 'react';
import {
  Bot,
  ChevronDown,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

const suggestedQuestions = [
  'What does Inusah do?',
  'What technologies does he use?',
  'Tell me about his projects',
  'How can I contact him?',
];

const knowledgeBase = [
  {
    keywords: ['what does', 'who is', 'about', 'do for a living', 'role'],
    answer:
      "Inusah Mustapha is a Full Stack Web Developer based in Ghana. He builds reliable, scalable web applications and enjoys turning real-world problems into thoughtful digital experiences.",
  },
  {
    keywords: ['skill', 'technology', 'technologies', 'stack', 'know', 'use'],
    answer:
      'He works across the frontend and backend with React, Next.js, JavaScript, Tailwind CSS, Node.js, Express, Spring Boot, Java, PHP, MySQL, MongoDB, REST APIs, Git, Docker, and AWS.',
  },
  {
    keywords: ['project', 'built', 'portfolio', 'work', 'application'],
    answer:
      'His featured work includes a Job Portal System, a real-time Chat Application, and a Human Resource Management System. Visit the Projects section to see the details and technologies used.',
  },
  {
    keywords: ['experience', 'background', 'education', 'degree', 'study'],
    answer:
      'Inusah is pursuing a BSc in Computer Science and has been developing real-world software since 2021. His experience spans frontend, backend, databases, authentication, APIs, and software architecture.',
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'available', 'opportun'],
    answer:
      'He is available for opportunities and collaborations. You can reach him at inusahmustapha428@gmail.com or use the contact form below.',
  },
  {
    keywords: ['where', 'location', 'based', 'ghana'],
    answer:
      'Inusah is based in Ghana and is open to discussing interesting projects and remote opportunities.',
  },
];

const getAssistantResponse = (question) => {
  const normalizedQuestion = question.toLowerCase();
  const match = knowledgeBase.find((entry) =>
    entry.keywords.some((keyword) => normalizedQuestion.includes(keyword))
  );

  return (
    match?.answer ||
    "I can tell you about Inusah's skills, projects, experience, education, availability, or how to contact him. What would you like to know?"
  );
};

const PortfolioAssistant = () => {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi! I'm Inusah's portfolio assistant. Ask me anything about his work, skills, or experience.",
    },
  ]);

  const askQuestion = (event) => {
    event?.preventDefault();

    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) return;

    setMessages((previousMessages) => [
      ...previousMessages,
      { role: 'user', text: trimmedQuestion },
      { role: 'assistant', text: getAssistantResponse(trimmedQuestion) },
    ]);
    setQuestion('');
  };

  const askSuggestedQuestion = (suggestion) => {
    setQuestion(suggestion);
    setMessages((previousMessages) => [
      ...previousMessages,
      { role: 'user', text: suggestion },
      { role: 'assistant', text: getAssistantResponse(suggestion) },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {isOpen && (
        <div
          className={`mb-3 flex h-[min(620px,calc(100vh-7rem))] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border shadow-2xl shadow-slate-950/20 ${
            isDark
              ? 'border-slate-700 bg-[#0c111d] text-white'
              : 'border-slate-200 bg-white text-slate-900'
          }`}
          role="dialog"
          aria-label="Ask Inusah's portfolio assistant"
        >
          <div className="flex items-center justify-between bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <Bot size={21} />
              </div>
              <div>
                <p className="font-semibold">Portfolio Assistant</p>
                <p className="flex items-center gap-1 text-xs text-blue-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Ready to answer
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 text-blue-100 transition-colors hover:bg-white/15 hover:text-white"
              aria-label="Close portfolio assistant"
            >
              <X size={19} />
            </button>
          </div>

          <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex items-end gap-2 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                    <Bot size={15} />
                  </div>
                )}
                <p
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'rounded-br-md bg-blue-600 text-white'
                      : isDark
                      ? 'rounded-bl-md bg-slate-800 text-slate-200'
                      : 'rounded-bl-md bg-slate-100 text-slate-700'
                  }`}
                >
                  {message.text}
                </p>
                {message.role === 'user' && (
                  <div className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-500/10 text-slate-500">
                    <User size={15} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {messages.length === 1 && (
            <div className="flex flex-wrap gap-2 px-4 pb-3">
              {suggestedQuestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => askSuggestedQuestion(suggestion)}
                  className={`rounded-full border px-3 py-1.5 text-left text-xs transition-colors ${
                    isDark
                      ? 'border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-blue-300'
                      : 'border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
                  }`}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form
            onSubmit={askQuestion}
            className={`flex items-center gap-2 border-t p-3 ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}
          >
            <input
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about Inusah..."
              aria-label="Ask a question about Inusah"
              className={`min-w-0 flex-1 rounded-xl border px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 ${
                isDark
                  ? 'border-slate-700 bg-slate-900 text-white placeholder:text-slate-500'
                  : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400'
              }`}
            />
            <button
              type="submit"
              disabled={!question.trim()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send question"
            >
              <Send size={17} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="group flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-1 hover:bg-blue-700"
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        aria-expanded={isOpen}
      >
        {isOpen ? <ChevronDown size={18} /> : <MessageCircle size={18} />}
        <span className="hidden sm:inline">Ask about Inusah</span>
        <Sparkles size={15} className="text-blue-200 transition-transform group-hover:rotate-12" />
      </button>
    </div>
  );
};

export default PortfolioAssistant;