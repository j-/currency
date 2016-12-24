[Currency][site]
================

## Services

Currently supports the following exchange rates services:

* [CurrencyLayer.com](https://currencylayer.com/)
    - Needs an [Access Key](https://currencylayer.com/product)
* [Fixer.io](http://fixer.io/)
* [NAB.com.au](https://developer.nab.com.au/)
    - Needs an [API Key](https://developer.nab.com.au/register)
* [OpenExchangeRates.org](https://openexchangerates.org/)
    - Needs an [App ID](https://openexchangerates.org/signup)

## Building

```
$ export KEY_OER="openexchangerates.org key here"
$ export KEY_CL="currencylayer.com key here"
$ export KEY_NAB="nab.com.au key here"
$ npm run build
```

[site]: https://skeoh.com/currency/
