RegisterKeyMapping('togglePhone', 'Toggle Phone', 'keyboard', 'f1')
RegisterCommand('togglePhone', function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        show = true
    })
end, false)

RegisterNUICallback('close', function(data, cb)
    SetNuiFocus(false)
    SendNUIMessage({
        show = false
    })
end)
