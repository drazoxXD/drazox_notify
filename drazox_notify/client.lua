function RegisterNotificationEvent(eventName, iconClass, bgColor)
    RegisterNetEvent(eventName, function(msg, time2)
        if time2 == nil then
            time2 = 5000
        end
        SendNUIMessage({
            type = 'notification',
            message = msg,
            iconClass = iconClass,
            bgColor = bgColor,
            time = time2,
        })
    end)
end

--##REGISTER THE CUSTOM NOTIFY
RegisterNetEvent('mv_notify:custom', function(icon, msg, time2, bgColor)
         SendNUIMessage({
             type = 'notification',
             message = msg,
             iconClass = icon,
             bgColor = bgColor,
             time = time2,
         })
    end)

--##REGISTER THE BASIC NOTIFY
RegisterNotificationEvent('mv_notify:success', 'mdi mdi-check-circle', '#27AE60')
RegisterNotificationEvent('mv_notify:info', 'mdi mdi-information-box', '#2C3E50')
RegisterNotificationEvent('mv_notify:error', 'mdi mdi-exclamation-thick', '#E74C3C')
RegisterNotificationEvent('mv_notify:warn', 'mdi mdi-skull-crossbones', '#F1C40F')

RegisterCommand('notifytest', function()
        TriggerEvent('mv_notify:success', 'Ügyes vagy', 5000)
    Wait(1000)
        TriggerEvent('mv_notify:info', 'Infó', 6000)
    Wait(1000)
        TriggerEvent('mv_notify:error', 'Rossz fiú', 7000)
    Wait(1000)
        TriggerEvent('mv_notify:warn', 'Na figyelmeztettelek', 8000)
    Wait(1000)
        TriggerEvent('mv_notify:custom', 'mdi mdi-food', 'Ez egy custom notify', 9000, '#ff6b08')
end)