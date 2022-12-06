import {MacOSOfficeSuiteAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMacOSOfficeSuiteApp} from './serializeMacOSOfficeSuiteApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMacOSOfficeSuiteAppCollectionResponse(writer: SerializationWriter, macOSOfficeSuiteAppCollectionResponse: MacOSOfficeSuiteAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, macOSOfficeSuiteAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", macOSOfficeSuiteAppCollectionResponse.value as any, serializeMacOSOfficeSuiteApp);
}
