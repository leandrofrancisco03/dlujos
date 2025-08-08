"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => crypto.randomUUID())
  const [hasAutoOpened, setHasAutoOpened] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Auto-abrir el chat después de 4 segundos
  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasAutoOpened(true)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [hasAutoOpened])

  // Mensaje de bienvenida inicial - MÁS PEQUEÑO
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: crypto.randomUUID(),
        content:
          "¡Hola! 👋 Soy tu asistente de Import D'Lujos\n\nTe ayudo con productos de Amazon, Apple, Nike y más. ¿Qué buscas?",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      const response = await fetch("https://n8n.tmkmarket.com/webhook/acfa76bc-e099-4270-9777-034162eff32b/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId: sessionId,
          action: "sendMessage",
          chatInput: inputValue,
        }),
      })

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor")
      }

      const data = await response.json()
      const aiResponse = Array.isArray(data) ? data[0]?.output : data.output

      if (aiResponse) {
        const aiMessage: Message = {
          id: crypto.randomUUID(),
          content: aiResponse,
          isUser: false,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiMessage])
      }
    } catch (error) {
      console.error("Error sending message:", error)
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        content: "Error al procesar tu mensaje. Intenta nuevamente o contáctanos por WhatsApp.",
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const formatMessage = (content: string) => {
    return content.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < content.split("\n").length - 1 && <br />}
      </span>
    ))
  }

  return (
    <>
      {/* Botón flotante - Responsivo */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
        size="icon"
      >
        {isOpen ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        ) : (
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        )}
        <span className="sr-only">{isOpen ? "Cerrar chat" : "Abrir chat"}</span>
      </Button>

      {/* Chat Widget - MÁS PEQUEÑO Y COMPACTO */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 w-[calc(100vw-2rem)] max-w-xs sm:w-72 sm:max-w-sm h-80 sm:h-80 shadow-2xl border-0 bg-white overflow-hidden animate-fade-in">
          {/* Header COMPACTO - altura fija pequeña */}
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 h-10 flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2 w-full">
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="h-3 w-3" />
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-xs font-medium leading-none truncate">Import D'Lujos AI</CardTitle>
              </div>
            </div>
          </CardHeader>

          {/* Contenido del chat - altura calculada */}
          <div className="flex flex-col h-[calc(100%-2.5rem)]">
            {/* Messages Area - SOLO ESTA ÁREA TIENE SCROLL */}
            <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-1 ${message.isUser ? "justify-end" : "justify-start"}`}>
                  {!message.isUser && (
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-2 rounded-lg text-xs ${
                      message.isUser
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none"
                        : "bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <div className="whitespace-pre-wrap leading-relaxed">{formatMessage(message.content)}</div>
                    <div className={`text-xs mt-1 opacity-70 ${message.isUser ? "text-blue-100" : "text-gray-500"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                  {message.isUser && (
                    <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-1 justify-start">
                  <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-white border border-gray-200 p-2 rounded-lg rounded-bl-none shadow-sm">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-3 w-3 animate-spin text-blue-600" />
                      <span className="text-xs text-gray-600">Escribiendo...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - FOOTER COMPACTO Y FIJO */}
            <div className="p-2 border-t bg-white flex-shrink-0">
              <div className="flex gap-1">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribe aquí..."
                  disabled={isLoading}
                  className="flex-1 border-gray-200 focus:border-blue-500 text-xs h-7"
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-2 h-7 flex-shrink-0"
                >
                  <Send className="h-3 w-3" />
                </Button>
              </div>
              <p className="text-xs text-gray-400 mt-1 text-center">Import D'Lujos AI</p>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
