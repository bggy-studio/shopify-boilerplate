const Currency = {
  rates: {"USD":1.0,"EUR":1.08389,"GBP":1.24164,"CAD":0.718078,"ARS":0.0148706,"AUD":0.653528,"BRL":0.174439,"CLP":0.00121105,"CNY":0.14136,"CYP":0.397899,"CZK":0.0397629,"DKK":0.145314,"EEK":0.0706676,"HKD":0.129009,"HUF":0.00310218,"ISK":0.00683816,"INR":0.0132356,"JMD":0.00731284,"JPY":0.0093524,"LVL":1.57329,"LTL":0.320236,"MTL":0.293496,"MXN":0.0422971,"NZD":0.614135,"NOK":0.0978901,"PLN":0.238271,"SGD":0.707586,"SKK":21.5517,"SIT":175.439,"ZAR":0.0545576,"KRW":0.000819848,"SEK":0.102193,"CHF":1.02975,"TWD":0.033486,"UYU":0.0230745,"MYR":0.230721,"BSD":1.0,"CRC":0.00176159,"RON":0.224491,"PHP":0.0198097,"AED":0.272294,"VEB":0.000100125,"IDR":6.6949e-05,"TRY":0.140911,"THB":0.0310597,"TTD":0.148203,"ILS":0.285204,"SYP":0.00194822,"XCD":0.369937,"COP":0.000257002,"RUB":0.0136228,"HRK":0.143508,"KZT":0.00237033,"TZS":0.000432147,"XPT":773.778,"SAR":0.266667,"NIO":0.0290744,"LAK":0.000111488,"OMR":2.60078,"AMD":0.0020622,"CDF":0.000575725,"KPW":0.00111104,"SPL":6.0,"KES":0.00943183,"ZWD":0.00276319,"KHR":0.000243857,"MVR":0.0645877,"GTQ":0.129877,"BZD":0.496738,"BYR":4.10234e-05,"LYD":0.704533,"DZD":0.00775536,"BIF":0.0005249,"GIP":1.24164,"BOB":0.145215,"XOF":0.00165238,"STD":4.40377e-05,"NGN":0.00256428,"PGK":0.29,"ERN":0.0666667,"MWK":0.00135717,"CUP":0.0377358,"GMD":0.0195526,"CVE":0.00982944,"BTN":0.0132356,"XAF":0.00165238,"UGX":0.000263143,"MAD":0.101798,"MNT":0.000358371,"LSL":0.0545576,"XAG":15.5619,"TOP":0.430588,"SHP":1.24164,"RSD":0.00921986,"HTG":0.010121,"MGA":0.000263152,"MZN":0.0147724,"FKP":1.24164,"BWP":0.0825454,"HNL":0.0403356,"PYG":0.000153376,"JEP":1.24164,"EGP":0.063762,"LBP":0.00066335,"ANG":0.558861,"WST":0.361922,"TVD":0.653528,"GYD":0.00480356,"GGP":1.24164,"NPR":0.00823367,"KMF":0.00220318,"IRR":2.38562e-05,"XPD":1849.35,"SRD":0.134154,"TMM":5.71428e-05,"SZL":0.0545576,"MOP":0.125252,"BMD":1.0,"XPF":0.00908302,"ETB":0.0296746,"JOD":1.41044,"MDL":0.0562143,"MRO":0.00263767,"YER":0.00399693,"BAM":0.554186,"AWG":0.558659,"PEN":0.293408,"VEF":0.100125,"SLL":0.000101688,"KYD":1.21951,"AOA":0.00183003,"TND":0.345815,"TJS":0.0980709,"SCR":0.0556582,"LKR":0.00536134,"DJF":0.00562395,"GNF":0.000105037,"VUV":0.00830939,"SDG":0.0180821,"IMP":1.24164,"GEL":0.311089,"FJD":0.443695,"DOP":0.0181989,"XDR":1.36286,"MUR":0.0251621,"MMK":0.000718954,"LRD":0.00504374,"BBD":0.5,"ZMK":5.37714e-05,"XAU":1706.81,"VND":4.27837e-05,"UAH":0.0372409,"TMT":0.285714,"IQD":0.000843706,"BGN":0.554186,"KGS":0.0126742,"RWF":0.0010697,"BHD":2.65957,"UZS":9.88217e-05,"PKR":0.00626266,"MKD":0.0175402,"AFN":0.0131126,"NAD":0.0545576,"BDT":0.0117876,"AZN":0.588241,"SOS":0.00173753,"QAR":0.274725,"PAB":1.0,"CUC":1.0,"SVC":0.114286,"SBD":0.121,"ALL":0.00869713,"BND":0.707586,"KWD":3.23112,"GHS":0.173839,"ZMW":0.0537714,"XBT":8807.41,"NTD":0.0337206,"BYN":0.410234,"CNH":0.140962,"MRU":0.0263767,"STN":0.0440377,"VES":5.79423e-06,"MXV":0.268384},
  convert: function(amount, from, to) {
    return (amount * this.rates[from]) / this.rates[to];
  }
};

export default Currency;