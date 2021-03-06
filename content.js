function discard() {
    if (source.prevSecretData) {
        originalData = source.prevSecretData
        runFilter(originalData, filterArray);
    }
}

function filter(tickerFilter) {
    if (!tickerFilter) {
        return;
    }
    if (source.prevSecretData === undefined) {
        source.prevSecretData = originalData
    }
    originalData = source.prevSecretData.filter(e => tickerFilter.includes(e.ticker))
    runFilter(originalData, filterArray);
}

function spb() {
    if (source.prevSecretData === undefined) {
        source.prevSecretData = originalData
    }
    const spbTickers = ["MSGE", "CHK", "OTIS", "CARR", "AON", "ARNC", "CHNG", "IR", "OVV", "GNL", "SBRA", "CLDT", "CORR", "KRG", "APLE", "SRC", "DDOG", "OI", "KMRC", "SPB@US", "INST", "ACM", "ADUS", "AERI", "AGIO", "ANGI", "ANIP", "ARNA", "ATRA", "BLDR", "BOOT", "CARA", "CFX", "CORT", "CSII", "CSOD", "CTLT", "DAR", "ECHO", "ECPG", "EGHT", "EGRX", "EHTH", "ESPR", "FLWS", "FOE", "FORM", "GTN", "HALO", "HHC", "HIBB", "HRTX", "HSC", "IPHI", "LPSN", "LRN", "MRC", "MTG", "MTOR", "MXL", "NCR", "NTCT", "NVEE", "OII", "OIS", "OSUR", "PCRX", "PPC", "PRAA", "PRFT", "REGI", "RXN", "SBH", "SRI", "STAA", "SUPN", "SYNA", "TCX", "THS", "TTMI", "UCTT", "UNVR", "VCRA", "VG", "VNDA", "VRNS", "WRLD", "XLRN", "ZGNX", "ZUMZ", "VCEL", "SHEN", "DLTH", "MHO", "BMCH", "TRUP", "LASR", "MMI", "GTHX", "SBCF", "MBUU", "SMPL", "PGTI", "CHEF", "FOCS", "LNTH", "AOBC", "PLUS", "NTLA", "NMIH", "ALTR", "ZYNE", "HSKA", "FSLY", "PINS", "RVLV", "BYND", "ZYXI", "POST", "FSCT", "RDFN", "ITGR", "BCPC", "QNST", "MGY", "SONO", "FNKO", "DNLI", "TWNK", "XNCR", "WAL", "EVBG", "RGNX", "RPD", "MDGL", "AJRD", "YETI", "NEO", "CDNA", "MUSA", "BL", "PUMP", "EDIT", "RETA", "QTWO", "MRNA", "GKOS", "TCMD", "IOVA", "USNA", "APPN", "AIMT", "YEXT", "WK", "VCYT", "INSP", "AX", "ALLO", "UPWK", "FATE", "AXGN", "APPF", "FRPT", "FRHC", "PNTG", "PAGS", "XRX", "MANU", "SKX", "CROX", "CACC", "CVLT", "EVH", "HDS", "GSKY", "SWI", "SMAR", "PTC", "HUBS", "BPMC", "SRPT", "TCRR", "SAGE", "ALNY", "BLUE", "JELD", "MDRX", "CARS", "QRTEA", "PS", "WTTR", "DNOW", "TPH", "SWCH", "EXAS", "VRNT", "IMMU", "QUOT", "PSTG", "ATUS", "MSGS", "AXSM", "MDB", "BRK.A", "ARWR", "SFM", "GH", "MRTX", "GOSS", "NBIX", "LGND", "ACAD", "TNDM", "DXCM", "HEAR", "IRTC", "FGEN", "NVTA", "NKTR", "OKTA", "DOCU", "DBX", "PD", "PLAN", "NEWR", "FICO", "ZM", "NTNX", "ZUO", "BMRN", "FIVN", "SWAV", "CHGG", "SNAP", "ZG", "Z", "AVLR", "PFPT", "CSGP", "BEAT", "TMHC", "CREE", "BFYT", "LEGH", "TENB", "EXEL", "RNG", "OLLI", "ATKR", "MSGN", "RARE", "USFD", "GBT", "GMS", "PODD", "LYV", "SGEN", "MKL", "CIEN", "HAIN", "EEFT", "UBER", "CTVA", "DD", "CCK", "RAMP", "EPC", "ARW", "MTH", "CLGX", "ATGE", "AVNS", "PEN", "BLD", "GCO", "ENV", "NGVT", "FLOW", "BFAM", "CPS", "AXE", "VRTU", "VRTV", "HGV", "CRMT", "APEI", "CNXN", "VPG", "MYRG", "SAIL", "Y", "SFIX", "FORR", "MCRI", "ROKU", "LITE", "MTCH", "ZS", "SNBR", "COUP", "BECN", "IAC", "CARG", "IONS", "MEDP", "GCP", "AAXN", "UFPI", "SIVB", "EYE", "AZPN", "SYNH", "TCBI", "PINC", "COHR", "ALRM", "MASI", "LGIH", "PBH", "TREE", "OMCL", "ICUI", "ANAB", "FIZZ", "MYOK", "FOXF", "LHCG", "VICR", "QDEL", "SYKE", "SAIA", "PLXS", "CENTA", "VREX", "ALLK", "NEOG", "SPSC", "ITRI", "WGO", "CENT", "ROCK", "BAND", "ONTO", "DORM", "PETQ", "CSWI", "OFIX", "HCCI", "HURN", "ROLL", "MSTR", "CRVL", "CVCO", "SRDX", "SP", "FRPH", "LEVI", "LYFT", "TWLO", "ASIX", "TPIC", "RYTM", "TTD", "DISCB", "KTB", "DOW", "W", "DK", "BURL", "GRUB", "MEI", "TDS", "CHE", "WOR", "IBP", "CTB", "DRQ", "WHD", "AYX", "BKI", "SERV", "SSTK", "KFY", "VMW", "PBF", "ARMK", "SCCO", "KNX", "KMT", "WCC", "CNK", "PFGC", "DLB", "YELP", "ZEN", "WWE", "GDDY", "VNE", "RYN", "HAE", "IQV", "ELAN", "PLNT", "CLH", "WEX", "SITE", "BH", "AMN", "CRL", "FND", "POL", "GRA", "DKS", "RH", "MATX", "TOL", "TPX", "TKR", "WWW", "MD", "VC", "MLHR", "IIVI", "TER", "EPAY", "ANDE", "SBGI", "TWOU", "ABMD", "ATRO", "PATK", "STLD", "CMCO", "SCSC", "SEDG", "HA", "IRBT", "ANIK", "PRGS", "BRKR", "STRA", "NUVA", "RAVN", "TRMB", "WDAY", "NTUS", "NTGR", "MYGN", "DIOD", "MINI", "ON", "FIVE", "CHDN", "PZZA", "TTWO", "WERN", "ALGT", "RRGB", "CRUS", "LOGM", "WING", "FOX", "FOXA", "DIS", "BEB", "KCEL", "KZTK", "LTHM", "TNET", "TREX", "UFS", "UNF", "USM", "WBC", "WTS", "SSD", "SXI", "SXT", "TDY", "TRU", "SMG", "AAN", "ABG", "AIR", "ALV", "ASGN", "BCO", "BDC", "BERY", "AWI", "AWR", "BMI", "CE", "DLX", "EBS", "FCN", "FUL", "GBX", "GDOT", "GEF", "GHC", "GMED", "GNRC", "GPI", "CR", "CRS", "GVA", "HXL", "KEX", "LAD", "MOV", "MSM", "MTRN", "NEU", "NJR", "NOW", "NSP", "NUS", "MMS", "PRLB", "RGR", "ROG", "ROL", "SAM", "SAVE", "REX", "RGEN", "SINA", "PRSC", "MMSI", "NXST", "OSIS", "PCTY", "PEGA", "POWI", "NSIT", "MTSC", "MANH", "MANT", "MGLN", "IDCC", "IPAR", "JBSS", "JOUT", "KALU", "HUBG", "CVGW", "GTLS", "ENSG", "ENTA", "ERIE", "EXLS", "FARO", "CGNX", "CPRT", "CALM", "BBSI", "BJRI", "ATRI", "AMWD", "AEIS", "SMTC", "LOPE", "ACIA", "QADA", "THRM", "WWD", "WAB", "AIV", "CVET", "AGCO", "ALSN", "ANET", "AOS", "ASH", "BAH", "BC", "BIG", "BIO", "BR", "CRI", "CSL", "DDS", "DECK", "DY", "EPAM", "CLR", "EXP", "GWRE", "H", "HFC", "HII", "INGR", "JLL", "KEYS", "LEA", "FDS", "FLT", "LII", "LVS", "MAN", "MSCI", "MTN", "OSK", "PAYC", "PII", "PKG", "NVR", "OC", "RPM", "RS", "RMD", "SHAK", "SNX", "SPR", "TYL", "VEEV", "WLK", "WSM", "WSO", "XPO", "TFX", "THO", "TXRH", "ZBRA", "UI", "UTHR", "SSNC", "TECD", "SLAB", "RP", "SAFM", "SEIC", "ODFL", "OLED", "PLAY", "PLCE", "POOL", "PRAH", "QLYS", "MXIM", "NDSN", "MELI", "MIDD", "MKTX", "LULU", "FTNT", "LECO", "IPGP", "JCOM", "JKHY", "HQY", "IART", "INGN", "HCSG", "FANG", "COLM", "ETSY", "CASY", "CBRL", "CDNS", "BLKB", "AVAV", "AMCX", "AMED", "CI", "D", "ETRN", "WRK", "LIN", "REZI", "ET", "GTX", "PRSP", "WH", "APY", "SPLK", "AVGO", "PRIK01", "HWM", "DLPH", "SQ", "PANW", "LEN.B", "ETM", "BMW", "CBPO", "LKQ", "GPN", "HBAN", "BHF", "ARE", "FTI", "MAA", "GL", "SNPS", "JCI", "RJF", "DLR", "ALGN", "ALK", "AYI", "COO", "INCY", "INFO", "UA", "GS", "AMD", "MTD", "SPGI", "VNO", "COTY", "LNT", "CNC", "ED", "WLTW", "IT", "ULTA", "IDXX", "FBHS", "DXC", "HLT", "FTV", "ANSS", "AEE", "CHTR", "REG", "RE", "FL", "TDG", "AJG", "ALB", "HOLX", "UNM", "FTR", "BKR", "AA", "ENDP", "M", "BKNG", "RF", "AZO", "UAA", "URBN", "HBI", "USB", "STZ", "XRAY", "SIG", "KMX", "NWL", "APTV", "XEC", "ALXN", "WDC", "VTR", "PRU", "WY", "MCO", "OKE", "IRM", "EA", "NWSA", "ZION", "PNC", "TXN", "CB", "CMG", "SWKS", "AMG", "XLNX", "VFC", "MPC", "NTRS", "DISCK", "FFIV", "QRVO", "MNST", "IFF", "HIG", "SLG", "BDX", "SEE", "MYL", "AKAM", "VRSN", "IPG", "SHW", "K", "GRMN", "BBY", "DVA", "PEG", "CMCSA", "NEE", "SYF", "AMAT", "CAH", "WU", "KDP", "MUR", "KHC", "NLOK", "VRTX", "BWA", "TROW", "GPS", "CRM", "TRIP", "RCL", "NWS", "RL", "ESS", "DTE", "CFG", "BXP", "DISCA", "NOV", "HP", "ANTM", "HSIC", "CTSH", "APD", "COST", "SO", "TDC", "FISV", "KR", "MOS", "ETR", "ISRG", "CHD", "ECL", "ES", "EQIX", "LEG", "GPC", "EXPE", "KIM", "CNP", "ALL", "AVB", "PPG", "LRCX", "XEL", "EIX", "LEN", "HOG", "COF", "CERN", "ICE", "MCHP", "IP", "AES", "WHR", "ORLY", "AAP", "WELL", "APH", "LOW", "JNPR", "BK", "CTL", "WEC", "L", "MAR", "MKC", "CF", "RRC", "PLD", "ADI", "GLW", "REGN", "AVY", "FIS", "HPE", "LM", "WAT", "JWN", "DRI", "MMC", "BF.B", "ADS", "CMS", "STT", "HST", "PBI", "TT", "FLIR", "HUM", "PBCT", "BAX", "CTXS", "EW", "CINF", "SJM", "TGNA", "FMC", "PGR", "LB", "PCG", "SYK", "PVH", "ADSK", "ILMN", "HCA", "TSCO", "JEF", "TJX", "STX", "KEY", "ROST", "MSI", "PSA", "PHM", "BEN", "AMT", "DHI", "HRB", "ADBE", "DFS", "CL", "SWN", "COG", "EMN", "KLAC", "ADP", "MCK", "TAP", "MAT", "MTB", "CPRI", "SPG", "CMA", "MLM", "PDCO", "NAVI", "LH", "GIS", "TMO", "SYY", "MNK", "O", "ABT", "AAL", "RIG", "CAG", "VAR", "TRV", "CBRE", "CCI", "BBBY", "AFL", "PKI", "INTU", "SRE", "PFG", "UHS", "AMP", "CVS", "KMB", "ATVI", "CLX", "ALLE", "ADM", "EL", "EQT", "PEAK", "WYNN", "IVZ", "FE", "HPQ", "FITB", "WBA", "DGX", "LYB", "ZBH", "YUM", "HRL", "LHX", "AIZ", "NDAQ", "A", "BRK.B", "MHK", "NBL", "HAS", "LLY", "WYND", "TFC", "CCL", "ZTS", "NTAP", "UDR", "CPB", "TEL", "EXR", "MAC", "OMC", "NUE", "GT", "BLL", "AN", "TSN", "VMC", "TPR", "PPL", "UNH", "MDT", "MO", "HON", "NSC", "LUV", "CHRW", "ITW", "DVN", "AMGN", "MMM", "WM", "KMI", "RTX", "RHI", "TGT", "AME", "FAST", "ETN", "DE", "PH", "NVDA", "ROP", "PCAR", "CMI", "PEP", "BMY", "DHR", "SLB", "BLK", "FLR", "GWW", "PXD", "UAL", "HAL", "MA", "SNA", "SWK", "NKE", "C", "LMT", "HES", "FDX", "HD", "NLSN", "UNP", "TXT", "DLTR", "OXY", "AGN", "EOG", "XYL", "GM", "KSU", "PWR", "VRSK", "EFX", "UPS", "DOV", "BIIB", "ROK", "J", "URI", "EXPD", "AXP", "FLS", "PSX", "DG", "NOC", "APA", "R", "JBHT", "FCX", "MRO", "CXO", "RSG", "JPM", "CTAS", "WFC", "ACN", "SCHW", "MAS", "MDLZ", "AIG", "WMB", "COP", "SRCL", "HSY", "EMR", "ORCL", "GD", "BSX", "MRK", "GDWS", "AKZM", "BAST", "CLF", "RACE", "GOOG", "GOOGL", "PYPL", "TIF", "IRAO", "SPB", "DAL", "MSFT", "SBUX", "EBAY", "VIAC", "CSCO", "GILD", "EXC", "IBM", "PFE", "MCD", "WMT", "VLO", "FSLR", "JNJ", "QCOM", "CME", "MET", "CVX", "KO", "NRG", "ABBV", "GE", "PG", "MU", "F", "T", "TSLA", "ETFC", "CAT", "AAPL", "NFLX", "V", "XOM", "AMZN", "PM", "INTC", "VZ", "BA", "MS", "BAC", "TWTR", "NEM", "FB", "FEES", "MAGN", "SNGS", "LKOH", "VTBR", "SNGSP", "HYDR", "RTKM", "TRNFP", "SBER", "MTSS", "URKA", "RSTI", "SBERP", "MGNT", "NLMK", "NVTK", "GMKN", "GAZP", "SOUZ"];
    originalData = source.prevSecretData.filter(e => spbTickers.includes(e.ticker))
    runFilter(originalData, filterArray);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.type) {
        case 'discard':
            var script = document.createElement('script');
            script.appendChild(document.createTextNode('(' + discard + ')();'));
            (document.body || document.head || document.documentElement).appendChild(script);
            sendResponse({})
            break;
        case 'spb':
            var script = document.createElement('script');
            script.appendChild(document.createTextNode('(' + spb + ')();'));
            (document.body || document.head || document.documentElement).appendChild(script);
            sendResponse({})
            break;
        case 'custom':
            var script = document.createElement('script');
            script.appendChild(document.createTextNode('(' + filter + ')(' + request.filter + ');'));
            (document.body || document.head || document.documentElement).appendChild(script);
            sendResponse({})
            break;
        default:
            break;
    }
    sendResponse({})
});

function main(fFilter, fDiscard, fSpb) {
    var quickFilter = new Set()
    var quickFilterDiv = document.createElement("div");
    var quickFilterBtnsDiv = document.createElement("div");
    quickFilterBtnsDiv.style.display = "none"
    var buttonApply = document.createElement("BUTTON");
    buttonApply.innerHTML = "Apply";
    buttonApply.addEventListener("click", function() {
        fFilter(Array.from(quickFilter))
    });
    quickFilterBtnsDiv.appendChild(buttonApply)
    var buttonDiscard = document.createElement("BUTTON");
    buttonDiscard.innerHTML = "Discard";
    buttonDiscard.addEventListener("click", function() {
        fDiscard()
        $('#jqxGrid').jqxGrid('clearselection');
        quickFilter = new Set()
        updateFilter()
    });
    quickFilterBtnsDiv.appendChild(buttonDiscard)
    var buttonSpb = document.createElement("BUTTON");
    buttonSpb.innerHTML = "Discard to SPB";
    buttonSpb.style.whiteSpace = "nowrap";
    buttonSpb.addEventListener("click", function() {
        fSpb()
        $('#jqxGrid').jqxGrid('clearselection');
        quickFilter = new Set()
        updateFilter()
    });
    quickFilterBtnsDiv.appendChild(buttonSpb)
    var updateFilter = function() {
        if (quickFilter.size) {
            quickFilterDiv.innerHTML = Array.from(quickFilter)
            quickFilterBtnsDiv.style.display = "inline"
        } else {
            quickFilterDiv.innerHTML = Array.from(quickFilter)
            quickFilterBtnsDiv.style.display = "none"
        }
    }
    $("#jqxGrid").jqxGrid({ selectionmode: 'multiplerows' })
    $('#jqxGrid').on('rowselect', function(event) {
        quickFilter.add(event.args.row.ticker)
        updateFilter()
    });
    $('#jqxGrid').on('rowunselect', function(event) {
        quickFilter.delete(event.args.row.ticker)
        updateFilter()
    });
    $("#jqxGrid").on("bindingcomplete", function(event) {
    	if (quickFilter.size){
            $('#jqxGrid').jqxGrid('clearselection');
            $('#jqxGrid').jqxGrid('getrows').forEach((value, index, array)=>{
            	if(quickFilter.has(value.ticker)){
            		$('#jqxGrid').jqxGrid('selectrow', value.boundindex)
            	}
            })
    	}
    });
    document.getElementsByClassName("left_sidebar")[0].appendChild(quickFilterDiv);
    document.getElementsByClassName("left_sidebar")[0].appendChild(quickFilterBtnsDiv);
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            $('#jqxGrid').jqxGrid('clearselection');
            quickFilter = new Set()
            updateFilter()
        }
    };
}

var scriptMain = document.createElement('script');
scriptMain.appendChild(document.createTextNode('(' + main + ')(' + filter + ',' + discard + ',' + spb + ');'));
(document.body || document.head || document.documentElement).appendChild(scriptMain);