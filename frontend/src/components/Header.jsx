import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../assets/images/trade-bridge.svg";
import { ethers } from "ethers";
import Buttons from "./Buttons"

const Header = ({ setSigner, setAccount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [account, setAccountState] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccountState(address);
        setAccount(address);
        setSigner(signer);
        console.log("Wallet connected:", address);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      console.error("MetaMask is not installed!");
    }
  }

  const disconnectWallet = () => {
    setAccountState(null);
    setAccount(null);
    setSigner(null);
    setDropdownOpen(false);
    console.log("Wallet disconnected");
    window.location.reload();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccountState(accounts[0]);
          setAccount(accounts[0]);
        } else {
          setAccountState(null);
          setAccount(null);
        }
      });

      window.ethereum.on("disconnect", () => {
        setAccountState(null);
        setAccount(null);
        setSigner(null);
        console.log("MetaMask disconnected");
      });
    }
  }, []);

  const copyToClipboard = () => {
    if (account) {
      navigator.clipboard.writeText(account);
      alert("Address copied to clipboard!");
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-slate-200 shadow-lg" : "bg-slate-200"
      }`}
    >
      <div className="flex px-2 py-2 items-center mx-10">
        <div className="flex items-center">
          <Link to="/market-place">
            <div className="flex items-center">
              <img src={Logo} alt="Trade Bridge Logo" className="w-20" />
              <div className="border-l-2 border-primary-100 px-2 text-black">
                <h1 className="font-bold text-2xl">Trade Bridge</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-primary-200 text-2xl">
            {isOpen ? (
              <AiOutlineClose className="text-white ml-24" />
            ) : (
              <AiOutlineMenu className="ml-24" />
            )}
          </button>
        </div>

        <div className="hidden md:flex flex-col gap-4 md:flex-row md:flex-1 md:justify-end items-center space-y-4 md:space-y-0 md:space-x-2">
          <nav className="flex flex-col items-center gap-4 md:flex-row space-y-6 md:space-y-0 md:space-x-2 px-5 text-nowrap text-sm font-semibold">
        

            <div className="relative">
              {!account ? (
                <Buttons
                  onClick={connectWallet}
                  className="bg-primary-300 text-white flex items-center gap-1 px-8 py-3 rounded-md focus:outline-none"
                >
                  Connect Wallet
                </Buttons>
              ) : (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="bg-primary-300 text-white flex items-center gap-1 px-8 py-3 rounded-md focus:outline-none"
                  >
                    {`${account.slice(0, 6)}...${account.slice(-4)}`}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <ul className="py-2">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={disconnectWallet}
                        >
                          Disconnect
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-bgText text-white z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <button onClick={toggleSidebar} className="text-2xl p-4">
            <AiOutlineClose />
          </button>

          <nav className="flex flex-col p-4 space-y-6 text-md">
          <Link to="/owner-dashboard" className="bg-primary-300 text-white px-2 py-3 rounded-md">
              Owner Dashboard
            </Link>
            
            <Link to="/staking" className="bg-primary-300 text-white px-2 py-3 rounded-md">
              Staking Pool
            </Link>
          
            <div className="relative">
              {!account ? (
                <button
                  onClick={connectWallet}
                  className="bg-logoColor text-white flex items-center gap-1 px-2 py-3 rounded-md focus:outline-none"
                >
                  Connect Wallet
                </button>
              ) : (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="bg-primary-300 text-white flex items-center gap-1 px-2 py-3 rounded-md focus:outline-none"
                  >
                    {`${account.slice(0, 6)}...${account.slice(-4)}`}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <ul className="py-2">
                        <li
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={disconnectWallet}
                        >
                          Disconnect
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;