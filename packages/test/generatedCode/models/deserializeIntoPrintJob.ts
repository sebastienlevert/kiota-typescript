import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoPrintDocument} from './deserializeIntoPrintDocument';
import {deserializeIntoPrintJobConfiguration} from './deserializeIntoPrintJobConfiguration';
import {deserializeIntoPrintJobStatus} from './deserializeIntoPrintJobStatus';
import {deserializeIntoPrintTask} from './deserializeIntoPrintTask';
import {deserializeIntoUserIdentity} from './deserializeIntoUserIdentity';
import {PrintJob} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintJob(printJob: PrintJob | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(printJob),
        "configuration": n => { printJob.configuration = n.getObject(deserializeIntoPrintJobConfiguration) as any ; },
        "createdBy": n => { printJob.createdBy = n.getObject(deserializeIntoUserIdentity) as any ; },
        "createdDateTime": n => { printJob.createdDateTime = n.getDateValue() as any ; },
        "documents": n => { printJob.documents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintDocument) as any ; },
        "isFetchable": n => { printJob.isFetchable = n.getBooleanValue() as any ; },
        "redirectedFrom": n => { printJob.redirectedFrom = n.getStringValue() as any ; },
        "redirectedTo": n => { printJob.redirectedTo = n.getStringValue() as any ; },
        "status": n => { printJob.status = n.getObject(deserializeIntoPrintJobStatus) as any ; },
        "tasks": n => { printJob.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintTask) as any ; },
    }
}
