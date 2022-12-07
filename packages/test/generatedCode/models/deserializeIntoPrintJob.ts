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
        "acknowledgedDateTime": n => { printJob.acknowledgedDateTime = n.getDateValue() as any ; },
        "completedDateTime": n => { printJob.completedDateTime = n.getDateValue() as any ; },
        "configuration": n => { printJob.configuration = n.getObject(deserializeIntoPrintJobConfiguration) as any ; },
        "createdBy": n => { printJob.createdBy = n.getObject(deserializeIntoUserIdentity) as any ; },
        "createdDateTime": n => { printJob.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { printJob.displayName = n.getStringValue() as any ; },
        "documents": n => { printJob.documents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintDocument) as any ; },
        "errorCode": n => { printJob.errorCode = n.getNumberValue() as any ; },
        "isFetchable": n => { printJob.isFetchable = n.getBooleanValue() as any ; },
        "redirectedFrom": n => { printJob.redirectedFrom = n.getStringValue() as any ; },
        "redirectedTo": n => { printJob.redirectedTo = n.getStringValue() as any ; },
        "status": n => { printJob.status = n.getObject(deserializeIntoPrintJobStatus) as any ; },
        "tasks": n => { printJob.tasks = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintTask) as any ; },
    }
}
