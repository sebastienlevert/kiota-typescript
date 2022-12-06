import {CallDirection} from './callDirection';
import {CallState} from './callState';
import {deserializeIntoAudioRoutingGroup} from './deserializeIntoAudioRoutingGroup';
import {deserializeIntoCallMediaState} from './deserializeIntoCallMediaState';
import {deserializeIntoCallOptions} from './deserializeIntoCallOptions';
import {deserializeIntoCallRoute} from './deserializeIntoCallRoute';
import {deserializeIntoCallTranscriptionInfo} from './deserializeIntoCallTranscriptionInfo';
import {deserializeIntoChatInfo} from './deserializeIntoChatInfo';
import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {deserializeIntoContentSharingSession} from './deserializeIntoContentSharingSession';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIncomingContext} from './deserializeIntoIncomingContext';
import {deserializeIntoInvitationParticipantInfo} from './deserializeIntoInvitationParticipantInfo';
import {deserializeIntoMediaConfig} from './deserializeIntoMediaConfig';
import {deserializeIntoMeetingInfo} from './deserializeIntoMeetingInfo';
import {deserializeIntoParticipant} from './deserializeIntoParticipant';
import {deserializeIntoParticipantInfo} from './deserializeIntoParticipantInfo';
import {deserializeIntoResultInfo} from './deserializeIntoResultInfo';
import {deserializeIntoToneInfo} from './deserializeIntoToneInfo';
import {Call} from './index';
import {Modality} from './modality';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCall(call: Call | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(call),
        "audioRoutingGroups": n => { call.audioRoutingGroups = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAudioRoutingGroup) as any ; },
        "callbackUri": n => { call.callbackUri = n.getStringValue() as any ; },
        "callChainId": n => { call.callChainId = n.getStringValue() as any ; },
        "callOptions": n => { call.callOptions = n.getObject(deserializeIntoCallOptions) as any ; },
        "callRoutes": n => { call.callRoutes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCallRoute) as any ; },
        "chatInfo": n => { call.chatInfo = n.getObject(deserializeIntoChatInfo) as any ; },
        "contentSharingSessions": n => { call.contentSharingSessions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoContentSharingSession) as any ; },
        "direction": n => { call.direction = n.getEnumValue<CallDirection>(CallDirection) as any ; },
        "incomingContext": n => { call.incomingContext = n.getObject(deserializeIntoIncomingContext) as any ; },
        "mediaConfig": n => { call.mediaConfig = n.getObject(deserializeIntoMediaConfig) as any ; },
        "mediaState": n => { call.mediaState = n.getObject(deserializeIntoCallMediaState) as any ; },
        "meetingInfo": n => { call.meetingInfo = n.getObject(deserializeIntoMeetingInfo) as any ; },
        "myParticipantId": n => { call.myParticipantId = n.getStringValue() as any ; },
        "operations": n => { call.operations = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCommsOperation) as any ; },
        "participants": n => { call.participants = n.getCollectionOfObjectValuesFromMethod(deserializeIntoParticipant) as any ; },
        "requestedModalities": n => { call.requestedModalities = n.getEnumValues<Modality>(Modality) as any ; },
        "resultInfo": n => { call.resultInfo = n.getObject(deserializeIntoResultInfo) as any ; },
        "source": n => { call.source = n.getObject(deserializeIntoParticipantInfo) as any ; },
        "state": n => { call.state = n.getEnumValue<CallState>(CallState) as any ; },
        "subject": n => { call.subject = n.getStringValue() as any ; },
        "targets": n => { call.targets = n.getCollectionOfObjectValuesFromMethod(deserializeIntoInvitationParticipantInfo) as any ; },
        "tenantId": n => { call.tenantId = n.getStringValue() as any ; },
        "toneInfo": n => { call.toneInfo = n.getObject(deserializeIntoToneInfo) as any ; },
        "transcription": n => { call.transcription = n.getObject(deserializeIntoCallTranscriptionInfo) as any ; },
    }
}
