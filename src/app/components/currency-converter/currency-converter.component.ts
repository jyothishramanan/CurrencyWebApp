import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit{
  fromAmount: number = 1;
  toAmount: number = 0;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  exchangeRate: number = 0;
  selected: any
  selectedFrom: any = "EUR"
  selectedTo: any
  historyList:{ result: string, date: string,isAvailable: string, message: string }[] = [
  ];

  currencyTypesFrom = [
    {
      "currencyCode": "EUR",
      "currencyValue": 1.0841
    }
  ]
  currencyTypes :{ currencyCode: string, currencyValue: string }[] = [
    
  ];
  constructor(private currencyService: CurrencyService) {
  }
  ngOnInit(): void {
    this.getAllCurrency();
  }

  getAllCurrency() {
    debugger;
    this.currencyService.getAllCurrencies().subscribe(
      (result: any) => {
        //this.fromKeyValueList = result;
        this.currencyTypes = result;

        debugger;
      },
      (err) => {
        //this.apiconfigService.apiStatusIndicator.next(false)
      }
    );
  }

  convertCurrency() {
    debugger;
    this.currencyService.convertCurrency(this.selectedTo,this.fromAmount).subscribe(
      (data: any) => {
        this.toAmount = data.result;
        this.historyList=data.histories
      },
      (error) => {
        console.log('Error fetching exchange rates:', error);
      }
    );
  }
}