import { formatDistanceToNow, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatRelativeDate(date) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}

export function formatLongDate(date) {
  return format(
    date,
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    { locale: ptBR }
  )
}