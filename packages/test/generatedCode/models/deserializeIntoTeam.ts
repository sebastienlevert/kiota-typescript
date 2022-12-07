import {deserializeIntoChannel} from './deserializeIntoChannel';
import {deserializeIntoConversationMember} from './deserializeIntoConversationMember';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoGroup} from './deserializeIntoGroup';
import {deserializeIntoProfilePhoto} from './deserializeIntoProfilePhoto';
import {deserializeIntoResourceSpecificPermissionGrant} from './deserializeIntoResourceSpecificPermissionGrant';
import {deserializeIntoSchedule} from './deserializeIntoSchedule';
import {deserializeIntoTeamDiscoverySettings} from './deserializeIntoTeamDiscoverySettings';
import {deserializeIntoTeamFunSettings} from './deserializeIntoTeamFunSettings';
import {deserializeIntoTeamGuestSettings} from './deserializeIntoTeamGuestSettings';
import {deserializeIntoTeamMemberSettings} from './deserializeIntoTeamMemberSettings';
import {deserializeIntoTeamMessagingSettings} from './deserializeIntoTeamMessagingSettings';
import {deserializeIntoTeamsAppInstallation} from './deserializeIntoTeamsAppInstallation';
import {deserializeIntoTeamsAsyncOperation} from './deserializeIntoTeamsAsyncOperation';
import {deserializeIntoTeamsTemplate} from './deserializeIntoTeamsTemplate';
import {deserializeIntoTeamSummary} from './deserializeIntoTeamSummary';
import {deserializeIntoTeamTemplateDefinition} from './deserializeIntoTeamTemplateDefinition';
import {deserializeIntoTeamworkTag} from './deserializeIntoTeamworkTag';
import {deserializeIntoUser} from './deserializeIntoUser';
import {Team} from './index';
import {TeamSpecialization} from './teamSpecialization';
import {TeamVisibilityType} from './teamVisibilityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTeam(team: Team | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(team),
        "allChannels": n => { team.allChannels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChannel) as any ; },
        "channels": n => { team.channels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChannel) as any ; },
        "classification": n => { team.classification = n.getStringValue() as any ; },
        "createdDateTime": n => { team.createdDateTime = n.getDateValue() as any ; },
        "description": n => { team.description = n.getStringValue() as any ; },
        "discoverySettings": n => { team.discoverySettings = n.getObject(deserializeIntoTeamDiscoverySettings) as any ; },
        "displayName": n => { team.displayName = n.getStringValue() as any ; },
        "funSettings": n => { team.funSettings = n.getObject(deserializeIntoTeamFunSettings) as any ; },
        "group": n => { team.group = n.getObject(deserializeIntoGroup) as any ; },
        "guestSettings": n => { team.guestSettings = n.getObject(deserializeIntoTeamGuestSettings) as any ; },
        "incomingChannels": n => { team.incomingChannels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoChannel) as any ; },
        "installedApps": n => { team.installedApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsAppInstallation) as any ; },
        "internalId": n => { team.internalId = n.getStringValue() as any ; },
        "isArchived": n => { team.isArchived = n.getBooleanValue() as any ; },
        "isMembershipLimitedToOwners": n => { team.isMembershipLimitedToOwners = n.getBooleanValue() as any ; },
        "members": n => { team.members = n.getCollectionOfObjectValuesFromMethod(deserializeIntoConversationMember) as any ; },
        "memberSettings": n => { team.memberSettings = n.getObject(deserializeIntoTeamMemberSettings) as any ; },
        "messagingSettings": n => { team.messagingSettings = n.getObject(deserializeIntoTeamMessagingSettings) as any ; },
        "operations": n => { team.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamsAsyncOperation) as any ; },
        "owners": n => { team.owners = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUser) as any ; },
        "permissionGrants": n => { team.permissionGrants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceSpecificPermissionGrant) as any ; },
        "photo": n => { team.photo = n.getObject(deserializeIntoProfilePhoto) as any ; },
        "primaryChannel": n => { team.primaryChannel = n.getObject(deserializeIntoChannel) as any ; },
        "schedule": n => { team.schedule = n.getObject(deserializeIntoSchedule) as any ; },
        "specialization": n => { team.specialization = n.getEnumValue<TeamSpecialization>(TeamSpecialization) as any ; },
        "summary": n => { team.summary = n.getObject(deserializeIntoTeamSummary) as any ; },
        "tags": n => { team.tags = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTeamworkTag) as any ; },
        "template": n => { team.template = n.getObject(deserializeIntoTeamsTemplate) as any ; },
        "templateDefinition": n => { team.templateDefinition = n.getObject(deserializeIntoTeamTemplateDefinition) as any ; },
        "tenantId": n => { team.tenantId = n.getStringValue() as any ; },
        "visibility": n => { team.visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType) as any ; },
        "webUrl": n => { team.webUrl = n.getStringValue() as any ; },
    }
}
