import React, { FC, Fragment } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useIntl } from 'react-intl'
import formatCurrency from './formatCurrency'

interface FormattedCurrencyProps {
  value: number
  divisor?: string
}

const FormattedCurrency: FC<FormattedCurrencyProps> = ({ value, divisor }) => {
  const { culture } = useRuntime()
  const intl = useIntl()

  const number = formatCurrency({ intl, culture, value })

  if (divisor) {
    const [integer, decimal] = number.split(divisor)

    return (
      <Fragment>
        <span>{integer}</span>
        <span>
          {divisor}
          {decimal}
        </span>
      </Fragment>
    )
  }

  return <Fragment>{number}</Fragment>
}

export default FormattedCurrency
