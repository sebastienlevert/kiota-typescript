import {deserializeIntoBookingBusiness} from './deserializeIntoBookingBusiness';
import {deserializeIntoBookingCurrency} from './deserializeIntoBookingCurrency';
import {SolutionsRoot} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSolutionsRoot(solutionsRoot: SolutionsRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bookingBusinesses": n => { solutionsRoot.bookingBusinesses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingBusiness) as any ; },
        "bookingCurrencies": n => { solutionsRoot.bookingCurrencies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoBookingCurrency) as any ; },
        "@odata.type": n => { solutionsRoot.odataType = n.getStringValue() as any ; },
    }
}
