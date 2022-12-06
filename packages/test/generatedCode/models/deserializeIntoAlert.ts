import {AlertFeedback} from './alertFeedback';
import {AlertSeverity} from './alertSeverity';
import {AlertStatus} from './alertStatus';
import {deserializeIntoAlertDetection} from './deserializeIntoAlertDetection';
import {deserializeIntoAlertHistoryState} from './deserializeIntoAlertHistoryState';
import {deserializeIntoAlertTrigger} from './deserializeIntoAlertTrigger';
import {deserializeIntoCloudAppSecurityState} from './deserializeIntoCloudAppSecurityState';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoFileSecurityState} from './deserializeIntoFileSecurityState';
import {deserializeIntoHostSecurityState} from './deserializeIntoHostSecurityState';
import {deserializeIntoInvestigationSecurityState} from './deserializeIntoInvestigationSecurityState';
import {deserializeIntoMalwareState} from './deserializeIntoMalwareState';
import {deserializeIntoMessageSecurityState} from './deserializeIntoMessageSecurityState';
import {deserializeIntoNetworkConnection} from './deserializeIntoNetworkConnection';
import {deserializeIntoProcess} from './deserializeIntoProcess';
import {deserializeIntoRegistryKeyState} from './deserializeIntoRegistryKeyState';
import {deserializeIntoSecurityResource} from './deserializeIntoSecurityResource';
import {deserializeIntoSecurityVendorInformation} from './deserializeIntoSecurityVendorInformation';
import {deserializeIntoUriClickSecurityState} from './deserializeIntoUriClickSecurityState';
import {deserializeIntoUserSecurityState} from './deserializeIntoUserSecurityState';
import {deserializeIntoVulnerabilityState} from './deserializeIntoVulnerabilityState';
import {Alert} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlert(alert: Alert | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(alert),
        "activityGroupName": n => { alert.activityGroupName = n.getStringValue() as any ; },
        "alertDetections": n => { alert.alertDetections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlertDetection) as any ; },
        "assignedTo": n => { alert.assignedTo = n.getStringValue() as any ; },
        "azureSubscriptionId": n => { alert.azureSubscriptionId = n.getStringValue() as any ; },
        "azureTenantId": n => { alert.azureTenantId = n.getStringValue() as any ; },
        "category": n => { alert.category = n.getStringValue() as any ; },
        "closedDateTime": n => { alert.closedDateTime = n.getDateValue() as any ; },
        "cloudAppStates": n => { alert.cloudAppStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCloudAppSecurityState) as any ; },
        "comments": n => { alert.comments = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "confidence": n => { alert.confidence = n.getNumberValue() as any ; },
        "createdDateTime": n => { alert.createdDateTime = n.getDateValue() as any ; },
        "description": n => { alert.description = n.getStringValue() as any ; },
        "detectionIds": n => { alert.detectionIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "eventDateTime": n => { alert.eventDateTime = n.getDateValue() as any ; },
        "feedback": n => { alert.feedback = n.getEnumValue<AlertFeedback>(AlertFeedback) as any ; },
        "fileStates": n => { alert.fileStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFileSecurityState) as any ; },
        "historyStates": n => { alert.historyStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlertHistoryState) as any ; },
        "hostStates": n => { alert.hostStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoHostSecurityState) as any ; },
        "incidentIds": n => { alert.incidentIds = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "investigationSecurityStates": n => { alert.investigationSecurityStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInvestigationSecurityState) as any ; },
        "lastEventDateTime": n => { alert.lastEventDateTime = n.getDateValue() as any ; },
        "lastModifiedDateTime": n => { alert.lastModifiedDateTime = n.getDateValue() as any ; },
        "malwareStates": n => { alert.malwareStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMalwareState) as any ; },
        "messageSecurityStates": n => { alert.messageSecurityStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMessageSecurityState) as any ; },
        "networkConnections": n => { alert.networkConnections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoNetworkConnection) as any ; },
        "processes": n => { alert.processes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProcess) as any ; },
        "recommendedActions": n => { alert.recommendedActions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "registryKeyStates": n => { alert.registryKeyStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRegistryKeyState) as any ; },
        "securityResources": n => { alert.securityResources = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSecurityResource) as any ; },
        "severity": n => { alert.severity = n.getEnumValue<AlertSeverity>(AlertSeverity) as any ; },
        "sourceMaterials": n => { alert.sourceMaterials = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "status": n => { alert.status = n.getEnumValue<AlertStatus>(AlertStatus) as any ; },
        "tags": n => { alert.tags = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "title": n => { alert.title = n.getStringValue() as any ; },
        "triggers": n => { alert.triggers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAlertTrigger) as any ; },
        "uriClickSecurityStates": n => { alert.uriClickSecurityStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUriClickSecurityState) as any ; },
        "userStates": n => { alert.userStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserSecurityState) as any ; },
        "vendorInformation": n => { alert.vendorInformation = n.getObject(deserializeIntoSecurityVendorInformation) as any ; },
        "vulnerabilityStates": n => { alert.vulnerabilityStates = n.getCollectionOfObjectValuesFromMethod(deserializeIntoVulnerabilityState) as any ; },
    }
}
