import React from 'react'
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#202125",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawerOpen: {
        backgroundColor: "#202125",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerClose: {
        backgroundColor: "#202125",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    icons: {
        color: "#FFFFFF"
    },
    iconsText: {
        color: "#FFFFFF"
    }
}));

const Menu = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();

    const [open, setOpen] = React.useState(false);
    const [tradeOpen, setTradeOpen] = React.useState(false);
    const [MoreOpen, setMoreOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleTradeClick = () => {
        setTradeOpen(!tradeOpen);
    };

    const handleMoreClick = () => {
        setMoreOpen(!MoreOpen);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo"/>
                    <Typography variant="h6" noWrap>
                        JurassicFarm
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open
                    })
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon className={classes.icons}/>
                        ) : (
                            <ChevronLeftIcon className={classes.icons}/>
                        )}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button onClick={() => {history.push("/")}}>
                        <ListItemIcon className={classes.icons}>
                            <svg viewBox="0 0 24 24" color="text" xmlns="http://www.w3.org/2000/svg"
                                 className="sc-bdfBwQ lmbBdH MuiSvgIcon-root">
                                <path
                                    d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"/>
                            </svg>
                        </ListItemIcon>
                        <ListItemText primary="Home" className={classes.iconsText}/>
                    </ListItem>
                    <ListItem button onClick={() => {history.push("/farms")}}>
                        <ListItemIcon className={classes.icons}>
                            <div style={{fontFamily: "Dinosaur Icons", fontSize:"1.5rem", textAlign: "center", width: "24px", height: "24px"}}>L</div>
                        </ListItemIcon>
                        <ListItemText primary="Farms" className={classes.iconsText}/>
                    </ListItem>
                    <ListItem button onClick={() => {history.push("/pools")}}>
                        <ListItemIcon className={classes.icons}>
                            <div style={{fontFamily: "Dinosaur Icons", fontSize:"1rem", textAlign: "center", width: "24px", height: "24px"}}>P</div>
                        </ListItemIcon>
                        <ListItemText primary="Dino Pools" className={classes.iconsText}/>
                    </ListItem>
                    <ListItem button onClick={handleMoreClick}>
                        <ListItemIcon className={classes.icons}>
                            <svg viewBox="0 0 24 24" color="text" xmlns="http://www.w3.org/2000/svg"
                                 className="sc-bdfBwQ lmbBdH MuiSvgIcon-root">
                                <path
                                    d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"/>
                            </svg>
                        </ListItemIcon>
                        <ListItemText primary="More" className={classes.iconsText}/>
                        {MoreOpen ? <ExpandLess className={classes.icons}/> : <ExpandMore className={classes.icons}/>}
                    </ListItem>
                    <Collapse in={MoreOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding onClick={() => {window.open('https://github.com/saltswap/', '_blank')}}>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon className={classes.icons}>
                                    <svg viewBox="0 0 24 24" color="text" xmlns="http://www.w3.org/2000/svg"
                                         className="sc-bdfBwQ lmbBdH MuiSvgIcon-root">
                                        <path
                                            d="M11.999 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.386.6.11.819-.26.819-.578 0-.284-.01-1.04-.017-2.04-3.337.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.744.082-.73.082-.73 1.205.086 1.838 1.238 1.838 1.238 1.07 1.833 2.81 1.304 3.493.996.109-.775.419-1.304.762-1.603C7.145 17 4.343 15.97 4.343 11.373c0-1.31.468-2.382 1.236-3.22-.124-.304-.536-1.524.118-3.176 0 0 1.007-.323 3.3 1.23.956-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.005.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.652.243 2.872.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.806 5.624-5.478 5.921.43.37.814 1.103.814 2.223 0 1.603-.015 2.898-.015 3.291 0 .321.217.695.825.578C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12.001-12"
                                            fillRule="evenodd"/>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary="Github" className={classes.iconsText}/>
                            </ListItem>
                            <ListItem button className={classes.nested} onClick={() => {window.open('https://saltswap.gitbook.io/salt-swap/', '_blank')}}>
                                <ListItemIcon className={classes.icons}>
                                    <svg viewBox="0 0 24 24" color="text" xmlns="http://www.w3.org/2000/svg"
                                         className="sc-bdfBwQ lmbBdH MuiSvgIcon-root">
                                        <path
                                            d="M10.797 17.41a.703.703 0 11-.001 1.406.703.703 0 01.001-1.405m11.02-4.347a.703.703 0 11.002-1.405.703.703 0 01-.002 1.405m0-2.874a2.176 2.176 0 00-2.173 2.173c0 .233.039.465.115.691l-7.178 3.821a2.164 2.164 0 00-1.784-.936c-.828 0-1.583.474-1.948 1.215l-6.45-3.4c-.68-.358-1.19-1.48-1.137-2.502.028-.532.213-.946.493-1.106.178-.1.392-.092.619.027l.043.023c1.709.9 7.301 3.846 7.537 3.955.363.168.565.236 1.184-.057l11.56-6.013c.17-.064.368-.226.368-.472 0-.342-.354-.477-.355-.477-.657-.316-1.668-.789-2.654-1.25-2.107-.987-4.495-2.105-5.544-2.654-.905-.474-1.634-.075-1.764.006l-.253.125C7.776 5.693 1.46 8.822 1.1 9.041.456 9.432.057 10.213.006 11.182c-.081 1.537.703 3.138 1.823 3.726l6.82 3.517a2.174 2.174 0 002.148 1.86 2.176 2.176 0 002.173-2.14l7.51-4.07a2.176 2.176 0 003.51-1.712 2.176 2.176 0 00-2.173-2.173"
                                            fillRule="evenodd"/>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary="Docs" className={classes.iconsText}/>
                            </ListItem>
                            <ListItem button className={classes.nested} onClick={() => {window.open('https://saltswap.medium.com/', '_blank')}}>
                                <ListItemIcon className={classes.icons}>
                                    <svg viewBox="0 0 24 24" color="text" xmlns="http://www.w3.org/2000/svg"
                                         className="sc-bdfBwQ lmbBdH MuiSvgIcon-root">
                                        <path
                                            d="M13.545 11.826c0 3.76-3.028 6.81-6.763 6.81-3.736 0-6.764-3.048-6.764-6.81 0-3.762 3.029-6.81 6.764-6.81 3.735 0 6.763 3.049 6.763 6.81zm7.42 0c0 3.54-1.514 6.41-3.382 6.41-1.867 0-3.381-2.87-3.381-6.41s1.514-6.41 3.381-6.41c1.868 0 3.382 2.87 3.382 6.41zm3.035 0c0 3.172-.533 5.743-1.19 5.743-.656 0-1.189-2.572-1.189-5.743 0-3.172.533-5.744 1.19-5.744.657 0 1.189 2.572 1.189 5.744z"
                                            fillRule="evenodd"/>
                                    </svg>
                                </ListItemIcon>
                                <ListItemText primary="Blog" className={classes.iconsText}/>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider/>
                {/* <List> */}
                {/*    {["All mail", "Trash", "Spam"].map((text, index) => ( */}
                {/*        <ListItem button key={text}> */}
                {/*            <ListItemIcon> */}
                {/*                {index % 2 === 0 ? <InboxIcon/> : <MailIcon/>} */}
                {/*            </ListItemIcon> */}
                {/*            <ListItemText primary={text}/> */}
                {/*        </ListItem> */}
                {/*    ))} */}
                {/* </List> */}
            </Drawer>
        </div>
    )
}

export default Menu
