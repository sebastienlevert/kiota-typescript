import {PrintJob} from './index';
import {serializeEntity} from './serializeEntity';
import {serializePrintDocument} from './serializePrintDocument';
import {serializePrintJobConfiguration} from './serializePrintJobConfiguration';
import {serializePrintJobStatus} from './serializePrintJobStatus';
import {serializePrintTask} from './serializePrintTask';
import {serializeUserIdentity} from './serializeUserIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintJob(writer: SerializationWriter, printJob: PrintJob | undefined = {}) : void {
        serializeEntity(writer, printJob)
            writer.writeObjectValueFromMethod("configuration", printJob.configuration as any, serializePrintJobConfiguration);
            writer.writeObjectValueFromMethod("createdBy", printJob.createdBy as any, serializeUserIdentity);
            writer.writeDateValue("createdDateTime", printJob.createdDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("documents", printJob.documents as any, serializePrintDocument);
            writer.writeBooleanValue("isFetchable", printJob.isFetchable);
            writer.writeStringValue("redirectedFrom", printJob.redirectedFrom);
            writer.writeStringValue("redirectedTo", printJob.redirectedTo);
            writer.writeObjectValueFromMethod("status", printJob.status as any, serializePrintJobStatus);
            writer.writeCollectionOfObjectValuesFromMethod("tasks", printJob.tasks as any, serializePrintTask);
}
