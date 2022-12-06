import {CertificationControlCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCertificationControl} from './serializeCertificationControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCertificationControlCollectionResponse(writer: SerializationWriter, certificationControlCollectionResponse: CertificationControlCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, certificationControlCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", certificationControlCollectionResponse.value as any, serializeCertificationControl);
}
