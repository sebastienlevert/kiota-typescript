import {WindowsFirewallNetworkProfile} from './index';
import {StateManagementSetting} from './stateManagementSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsFirewallNetworkProfile(windowsFirewallNetworkProfile: WindowsFirewallNetworkProfile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "authorizedApplicationRulesFromGroupPolicyMerged": n => { windowsFirewallNetworkProfile.authorizedApplicationRulesFromGroupPolicyMerged = n.getBooleanValue() as any ; },
        "connectionSecurityRulesFromGroupPolicyMerged": n => { windowsFirewallNetworkProfile.connectionSecurityRulesFromGroupPolicyMerged = n.getBooleanValue() as any ; },
        "firewallEnabled": n => { windowsFirewallNetworkProfile.firewallEnabled = n.getEnumValue<StateManagementSetting>(StateManagementSetting) as any ; },
        "globalPortRulesFromGroupPolicyMerged": n => { windowsFirewallNetworkProfile.globalPortRulesFromGroupPolicyMerged = n.getBooleanValue() as any ; },
        "inboundConnectionsBlocked": n => { windowsFirewallNetworkProfile.inboundConnectionsBlocked = n.getBooleanValue() as any ; },
        "inboundNotificationsBlocked": n => { windowsFirewallNetworkProfile.inboundNotificationsBlocked = n.getBooleanValue() as any ; },
        "incomingTrafficBlocked": n => { windowsFirewallNetworkProfile.incomingTrafficBlocked = n.getBooleanValue() as any ; },
        "@odata.type": n => { windowsFirewallNetworkProfile.odataType = n.getStringValue() as any ; },
        "outboundConnectionsBlocked": n => { windowsFirewallNetworkProfile.outboundConnectionsBlocked = n.getBooleanValue() as any ; },
        "policyRulesFromGroupPolicyMerged": n => { windowsFirewallNetworkProfile.policyRulesFromGroupPolicyMerged = n.getBooleanValue() as any ; },
        "securedPacketExemptionAllowed": n => { windowsFirewallNetworkProfile.securedPacketExemptionAllowed = n.getBooleanValue() as any ; },
        "stealthModeBlocked": n => { windowsFirewallNetworkProfile.stealthModeBlocked = n.getBooleanValue() as any ; },
        "unicastResponsesToMulticastBroadcastsBlocked": n => { windowsFirewallNetworkProfile.unicastResponsesToMulticastBroadcastsBlocked = n.getBooleanValue() as any ; },
    }
}
