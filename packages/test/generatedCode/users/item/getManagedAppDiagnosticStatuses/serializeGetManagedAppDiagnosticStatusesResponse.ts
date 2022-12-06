import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeManagedAppDiagnosticStatus} from '../../../models/serializeManagedAppDiagnosticStatus';
import {GetManagedAppDiagnosticStatusesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetManagedAppDiagnosticStatusesResponse(writer: SerializationWriter, getManagedAppDiagnosticStatusesResponse: GetManagedAppDiagnosticStatusesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getManagedAppDiagnosticStatusesResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getManagedAppDiagnosticStatusesResponse.value as any, serializeManagedAppDiagnosticStatus);
}
