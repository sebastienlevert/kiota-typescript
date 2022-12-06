import {SolutionsRoot} from './index';
import {serializeBookingBusiness} from './serializeBookingBusiness';
import {serializeBookingCurrency} from './serializeBookingCurrency';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSolutionsRoot(writer: SerializationWriter, solutionsRoot: SolutionsRoot | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("bookingBusinesses", solutionsRoot.bookingBusinesses as any, serializeBookingBusiness);
            writer.writeCollectionOfObjectValuesFromMethod("bookingCurrencies", solutionsRoot.bookingCurrencies as any, serializeBookingCurrency);
            writer.writeStringValue("@odata.type", solutionsRoot.odataType);
}
