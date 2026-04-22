-- CelestiaX Hub -
repeat task.wait() until game:IsLoaded()

local Player = game.Players.LocalPlayer
local SelectedGame = getgenv().sgame
local UniverseID = game.GameId

local ScriptList = {
    ["BloxFruits"] = "https://cdn.celestiax.fun/rbx/BF-Celestia.lua",
    ["Aimbot"] = "#",
}

local function SecurityKick(reason)
    Player:Kick("\n[CelestiaX Hub Security]\n" .. reason)
end

if not SelectedGame or SelectedGame == "" then
    SecurityKick("Vui lòng nhập tên Game vào getgenv().game trước khi chạy!")
    return
end

if ScriptList[SelectedGame] then
    print("[CelestiaX] Loading: " .. SelectedGame)
    
    local success, err = pcall(function()
        loadstring(game:HttpGet(ScriptList[SelectedGame]))()
    end)

    if not success then
        SecurityKick("Lỗi khi tải Script: " .. tostring(err))
    end
else
    SecurityKick("Game '" .. tostring(SelectedGame) .. "' không được hỗ trợ hoặc viết sai định dạng!")
end
